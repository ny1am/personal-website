import fs from 'fs';
import Handlebars from 'handlebars';
import path from 'path';

import { dateFormatter } from './utils.js';

Handlebars.registerHelper('date', function dateHelper(date: string) {
  return dateFormatter.format(new Date(date));
});

function getPath(fileName: string) {
  //TODO: revise
  return path.resolve(process.cwd(), `../resume-theme/src/${fileName}`);
}

export default {
  render: (resume: Record<string, unknown>) => {
    const css = fs.readFileSync(getPath('style.css'), 'utf-8');
    const template = fs.readFileSync(getPath('resume.hbs'), 'utf-8');

    return Handlebars.compile(template)({ css, resume });
  },
};
