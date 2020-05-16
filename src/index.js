import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from './redux/store'

import './index.css';

import registerServiceWorker from './registerServiceWorker';

const render = () => ReactDOM.render(<App />, document.getElementById('root'));
render()

store.subscribe(render)

registerServiceWorker();
