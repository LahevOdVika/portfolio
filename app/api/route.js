/*
import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";
import db from './db';
import {NextResponse} from "next/server";

async function generateThumbnail(url, address) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle2'});

    const viewportWidth = 1400;
    const viewportHeight = 900;
    await page.setViewport({width: viewportWidth, height: viewportHeight});

    const clip = { x: 0, y: 0, width: viewportWidth, height: viewportHeight };

    const date = new Date();

    const defaultDirectory = '/thumbnails';
    const dir = path.posix.join(defaultDirectory, address);
    const filename = `${address}-${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}.png`;
    const filepath = path.posix.join(dir, filename);

    const publicDir = path.join(proccess.cwd(), 'public', dir);
    if (!fs.existsSync(publicDir)) {
        await fs.promises.mkdir(publicDir, { recursive: true });
    }

    const screenshotPath = path.posix.join('public', filepath);
    await page.screenshot({path: screenshotPath, clip});

    await browser.close();
    return filepath;
}

async function addProjectToDatabase(address, imageFilePath, description) {
    const query = 'INSERT INTO projects (address, image_path, description) VALUES ($1, $2, $3) ON CONFLICT (address) DO UPDATE SET image_path = $2, description = $3';
    try {
        await db.query(query, [address, imageFilePath, description]);
        console.log("Project added or updated successfully");
    } catch (error) {
        console.error("Error adding or updating project:", error);
    }
}

export async function POST(request) {
    const address = request.headers.get('address');
    const description = request.headers.get('description');

    const filepath = await generateThumbnail(`https://${address}`, `${address}`);
    await addProjectToDatabase(address, filepath, description);

    return new Response(JSON.stringify({success: true}), { status: 200 });
}

export async function GET() {
    const query = 'SELECT * FROM projects ORDER BY ID DESC LIMIT 6';
    try {
        const result = await db.query(query);
        return NextResponse.json(result.rows);
    } catch (e) {
        console.error(e);
        return new Response(JSON.stringify({ error: 'Failed to fetch projects' }), { status: 500 });
    }

}
*/