import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import Timeline from './components/Timeline.js';
import Firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB27y1gdYay2HLN0R3YNB_Cu7jl4jWAoRU",
    authDomain: "variosproyectos-35b23.firebaseapp.com",
    databaseURL: "https://variosproyectos-35b23.firebaseio.com",
    projectId: "variosproyectos-35b23",
    storageBucket: "variosproyectos-35b23.appspot.com",
    messagingSenderId: "317508774373"
};

Firebase.initializeApp(config);

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
            <Route exact path = '/' component = { App } />
            <Route exact path = '/timeline' component = { Timeline } />
            <Route exact path = '/home' component = { App } />
        </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
