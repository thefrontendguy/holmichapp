import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';

import { store } from './redux/store'

function render() {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
}

store.subscribe(render);
render();

registerServiceWorker();
