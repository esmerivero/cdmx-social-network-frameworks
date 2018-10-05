import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import Timeline from './components/Timeline.js';


ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
            <Route exact path = '/' component = { App } />
            <Route exact path = '/timeline' component = { Timeline } />
            <Route exact path = '/home' component = { App } />
        </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
