/* @refresh reload */
import schema from '@pw/data/public/resume.json';
import { render } from 'solid-js/web';

import App from '../src/App';

render(() => <App schema={schema} />, document.body);
