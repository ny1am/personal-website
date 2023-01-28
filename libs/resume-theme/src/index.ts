import fs from 'fs';
import Handlebars from 'handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

import { dateFormatter } from './utils.js';

Handlebars.registerHelper('date', function dateHelper(date: string) {
  return dateFormatter.format(new Date(date));
});

function rawFile(fileName: string) {
  const dir = path.dirname(fileURLToPath(import.meta.url));
  return fs.readFileSync(path.resolve(dir, `./${fileName}`), 'utf-8');
}

export default {
  render: (resume: Record<string, unknown>) => {
    const css = rawFile('style.css');
    const template = rawFile('resume.hbs');

    return Handlebars.compile(template)({ css, resume });
  },
};
