import theme from '@pw/resume-theme';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { render } from 'resumed';

type GeneratePDF = {
  inputFilePath: string;
  outputFilePath: string;
};

async function generatePdf({ inputFilePath, outputFilePath }: GeneratePDF) {
  const resume = JSON.parse(await fs.promises.readFile(inputFilePath, 'utf-8'));
  const html = await render(resume, theme);

  const outputDir = path.dirname(outputFilePath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: 'domcontentloaded' });
  await page.pdf({
    path: outputFilePath,
    format: 'a4',
    margin: { top: 30, bottom: 30, left: 40, right: 40 },
    printBackground: false,
  });
  await browser.close();
}

generatePdf({
  inputFilePath: path.resolve(process.cwd(), './public/resume.json'),
  outputFilePath: path.resolve(process.cwd(), '../../apps/website/public/resume.pdf'),
});
