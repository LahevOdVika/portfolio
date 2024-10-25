import puppeteer from "puppeteer";
import * as fs from "node:fs";

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
}

export async function POST(request) {
    const address = request.headers.get('address');
    console.log(address);

    await generateThumbnail(`https://${address}`, `${address}`);

    return new Response(200);
}