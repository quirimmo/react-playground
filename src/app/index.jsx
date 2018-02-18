/* global window, document, React */

import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App.component.jsx';
import history from './history.jsx';
import reducers from './reducers.jsx';

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('app')
);
