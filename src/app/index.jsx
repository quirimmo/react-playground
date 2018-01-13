import React from 'react';
import { render } from 'react-dom';
import App from './App.component.jsx';
import { Router } from 'react-router-dom';
import history from './history';


render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById('app')
);