import { renderToString } from 'solid-js/web';

import template from './index.html?raw';
import css from './styles.css?raw';
import App from './src/App';

type Schema = Record<string, string>;

function renderApp(schema: Schema) {
  return renderToString(() => <App schema={schema} />);
}

export type Theme = {
  render: (schema: Schema) => Promise<string>;
};

const theme: Theme = {
  render: async (schema) => {
    const appHtml = await renderApp(schema);
    const html = template
      .replace(`<link href="styles.css" rel="stylesheet" />`, `<style>${css}</style>`)
      .replace(`<script src="/dev.tsx" type="module"></script>`, appHtml);
    return html;
  },
};

export default theme;
