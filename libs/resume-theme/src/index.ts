import fs from 'fs';
import Handlebars from 'handlebars';
import { fileURLToPath } from 'url';

import { dateFormatter } from './utils.js';

Handlebars.registerHelper('date', function dateHelper(date: string) {
  return dateFormatter.format(new Date(date));
});

function rawFile(fileName: string) {
  const filePath = fileURLToPath(new URL(fileName, import.meta.url));
  return fs.readFileSync(filePath, 'utf-8');
}

export default {
  render: (resume: Record<string, unknown>) => {
    const css = rawFile('style.css');
    const template = rawFile('resume.hbs');

    return Handlebars.compile(template)({ css, resume });
  },
};
