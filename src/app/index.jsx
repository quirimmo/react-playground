import React from 'react';
import { render } from 'react-dom';
import App from './App.component.jsx';
import { Router } from 'react-router-dom';
import history from './history.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers.jsx';

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);