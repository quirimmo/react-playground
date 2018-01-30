'use strict';

import React, { Component } from 'react';
import { HashRouter , BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import LikesCounterContainer from './likes-counter/components/containers/LikesCounter.component.jsx';
import Todo from './todo/components/presentationals/Todo.component.jsx';

import getTemplate from './App.component.template.jsx';

class App extends Component {

	constructor(props) {
		super(props);
	}

	render () {
		return getTemplate.call(this);
	}

}

export default App;