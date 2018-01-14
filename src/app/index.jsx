import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App.component.jsx';
import history from './history.jsx';
import todoApp from './reducers/index.jsx';


let store = createStore(todoApp);

render(
    <Provider
        store = {store}
    >
        <Router
            history = {history}
        >
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);