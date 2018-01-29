import React, { Component } from 'react';
import { HashRouter , BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import LikesCounterContainer from './likes-counter/components/containers/LikesCounter.component.jsx';
import Todo from './todo/components/presentationals/Todo.component.jsx';

import getTemplate from './App.component.template.jsx';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			menuItems: [{
				id: 1,
				label: 'Likes Counter',
				path: '/likes-counter',
				component: LikesCounterContainer
			}, {
				id: 2,
				label: 'Todo',
				path: '/todo',
				component: Todo
			}]
		};
	}

	createMenuItemsLinks() {
		return this.state.menuItems.map(itemsMapper);

		function itemsMapper(item) {
			return (
				<Link key={item.id} to={item.path}>{item.label}</Link>
			);
		}
	}

	createMenuItemsRoutes() {
		return this.state.menuItems.map(itemsMapper);

		function itemsMapper(item) {
			return (
				<Route key={item.id} path={item.path} component={item.component} />
			);
		}
	}


	render () {
		return getTemplate.call(this);
	}

}

export default App;