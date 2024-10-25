import puppeteer from "puppeteer";
import * as fs from "node:fs";
import mysql from "mysql2/promise";

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

    if (!fs.existsSync(`${defaultDirectory}${address}`)) {
        fs.mkdirSync(dir, {recursive: true});
        console.log("Doesn't exist");
    } else {
        console.log("Does exist");
    }

    await page.screenshot({ path: filepath, clip });

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
    const query = `INSERT INTO projects (address, image_path, description) VALUES (?, ?, ?)`;

    try {
        await db.query(query, [address, imageFilePath, description]);
    } catch (error) {
        console.error(error);
    }
}

export async function POST(request) {
    const address = request.headers.get('address');
    const description = request.headers.get('description');

    console.log(address);
    console.log(description);

    const filepath = await generateThumbnail(`https://${address}`, `${address}`);

    await addProjectToDatabase(address, filepath, description);

    return new Response(200);
}

export async function GET(request) {}
