import mysql from 'mysql2/promise'
import puppeteer from "puppeteer";
import * as fs from "node:fs";

async function generateThumbnail(url, thumbnailName) {
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

    const defaultDirectory = '/public/thumbnails/';

    fs.access(`${defaultDirectory}${thumbnailName}`, fs.constants.F_OK, (err) => {
        const date = new Date().getDate();
        const filename = `${thumbnailName}-${date}`;


    })

    await page.screenshot({ path: thumbnailPath, clip });

    await browser.close();
}

export async function POST(request) {
    const name = request.headers.get('name');
    console.log(name);

    generateThumbnail('https://studio-am.cz', 'thumbnail.png');

    return new Response(200);
}