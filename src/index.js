import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; //first import bootstrap then css so that user defined css classes can override bootstrap css classes
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
ReactDOM.render( < App / > , document.getElementById('root'));

function tick() {
    const element = ( <
        div >
        <
        h1 > Hello, world! < /h1> <
        h2 > It is { new Date().toLocaleTimeString() }. < /h2> < /
        div >
    );
    ReactDOM.render(element, document.getElementById('root'));
}


registerServiceWorker();