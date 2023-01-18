import fs from 'fs';
import path from 'path';
import * as theme from 'jsonresume-theme-short';
import puppeteer from 'puppeteer';
import { render } from 'resumed';

async function generatePdf() {
  const inputFileName = path.resolve(process.cwd(), './public/resume.json');
  const outputDir = path.resolve(process.cwd(), '../../apps/website/public');
  const outputFileName = 'resume.pdf';

  const resume = JSON.parse(await fs.promises.readFile(inputFileName, 'utf-8'));
  const html = await render(resume, theme);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: 'domcontentloaded' });
  await page.pdf({
    path: `${outputDir}/${outputFileName}`,
    format: 'a4',
    margin: { top: 30, bottom: 30, left: 40, right: 40 },
    printBackground: false,
  });
  await browser.close();
}

generatePdf();