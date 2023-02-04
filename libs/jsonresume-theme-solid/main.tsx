import { renderToString } from 'solid-js/web';

import { ResumeSchema } from './gen/schema.d';
import App from './src/App';
import template from './src/index.html?raw';
import css from './src/styles.css';

function renderApp(schema: ResumeSchema) {
  return renderToString(() => <App schema={schema} />);
}

export type Theme = {
  render: (schema: ResumeSchema) => Promise<string>;
};

const theme: Theme = {
  render: async (schema) => {
    const appHtml = await renderApp(schema);
    const html = template
      .replace(`<link href="styles.css" rel="stylesheet" />`, `<style>${css}</style>`)
      .replace(`<script src="/dev/index.tsx" type="module"></script>`, appHtml);
    return html;
  },
};

export default theme;
