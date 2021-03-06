import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';



var store = configureStore();
ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root'));

registerServiceWorker();
