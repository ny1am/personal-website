/* @refresh reload */
import { render } from 'solid-js/web';

import App from './src/App';

import schema from './sample-resume.json';

render(() => <App schema={schema} />, document.body);
