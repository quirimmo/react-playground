import React from 'react';
import { render } from 'react-dom';
import App from './App.component.jsx';
import { Router } from 'react-router-dom';
import history from './history.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/index.jsx';

let store = createStore(todoApp);

render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);