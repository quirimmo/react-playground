import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import history from './history.jsx';

import todoApp from './todo/reducers/index.jsx';
import App from './main/components/App.component.jsx';

let store = createStore(todoApp);

render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);