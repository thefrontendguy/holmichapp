import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import Map from './components/Map';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Map />, document.getElementById('root'));
registerServiceWorker();
