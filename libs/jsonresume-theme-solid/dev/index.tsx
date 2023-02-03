/* @refresh reload */
import { render } from 'solid-js/web';
import schema from '@pw/data/public/resume.json';

import App from '../src/App';

render(() => <App schema={schema} />, document.body);
