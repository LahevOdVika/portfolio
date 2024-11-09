import puppeteer from "puppeteer";
import * as fs from "node:fs";
import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

async function generateThumbnail(url, address) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    const viewportWidth = 1400;
    const viewportHeight = 900;
    await page.setViewport({ width: viewportWidth, height: viewportHeight });

    const clip = await page.evaluate(() => {
        const body = document.body;
        const html = document.documentElement;

        const height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);
        return {
            x: 0,
            y: 0,
            width: window.innerWidth,
            height: Math.min(height, window.innerHeight)
        };
    });

    const date = new Date();

    const defaultDirectory = 'thumbnails/';
    const dir = `${defaultDirectory}${address}`;

    const filename = `${address}-${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}.png`;
    let filepath = `${dir}/${filename}`;

    if (fs.existsSync(`public/${dir}`)) {
        console.log("Does exist");
    } else {
        fs.mkdirSync(`public/${dir}`, {recursive: true});
        console.log("Doesn't exist");
    }

    await page.screenshot({ path: `public/${filepath}`, clip });

    await browser.close();

    return filepath;
}

const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

async function addProjectToDatabase(address, imageFilePath, description) {
    const checkQuery = "SELECT * FROM projects WHERE address = ?";
    const insertQuery = "INSERT INTO projects (address, image_path, description) VALUES (?, ?, ?)";
    const updateQuery = "UPDATE projects SET image_path = ?, description = ? WHERE address = ?";

    const [rows] = await db.query(checkQuery, [address]);
    if (rows.length > 0) {
        console.log("Project already exists");
        try {
            await db.query(updateQuery, [imageFilePath, description, address]);
        } catch (error) {
            console.error(error);
        }
    } else {
        console.log("Creating new project");
        try {
            await db.query(insertQuery, [address, imageFilePath, description]);
        } catch (error) {
            console.error(error);
        }
    }
}

export async function POST(request) {
    const address = request.headers.get('address');
    const description = request.headers.get('description');

    console.log(address);
    console.log(description);

    const filepath = await generateThumbnail(`https://${address}`, `${address}`);
    console.log(filepath);
    await addProjectToDatabase(address, filepath, description);

    return new Response(200);
}

export async function GET() {
    const query = "SELECT * FROM projects ORDER BY ID DESC LIMIT 6";

    try {
        const [result] = await db.query(query);
        return NextResponse.json(result);
    } catch (e) {
        console.error(e);
    }
}
