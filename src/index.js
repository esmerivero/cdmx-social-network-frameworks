import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import Timeline from './components/Timeline.js';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path = '/' component = { App } />
            <Route exact path = '/timeline' component = { Timeline } />
        </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
