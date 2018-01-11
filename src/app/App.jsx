import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import AwesomeComponent from './AwesomeComponent.jsx';
import TodoListComponent from './TodoListComponent.jsx';

import css from './../../assets/styles/main.scss';

class App extends Component {

	constructor(props) {
		super(props);
		this.menuItems = [{
			id: 1,
			label: 'Test 1',
			path: '/my-path'
		}, {
			id: 2,
			label: 'Test 2',
			path: '/my-path-2'
		}];
	}

	render () {
		return (
			<MuiThemeProvider>
				<div>
					<RaisedButton label="Default" />
					<p>Hello React Project</p>
					<br/>
					<AwesomeComponent />
					<br/>
					<TodoListComponent />
					<br/>
					<div>{this.createMenuItems()}</div>
					<BrowserRouter>
						<div>
							<Link to='/awesome-component'>Awesome Component</Link>
							<Link to='/todo'>Todo List</Link>
							<Switch>
								<Route path='/awesome-component' component={AwesomeComponent} />
								<Route path='/todo' component={TodoListComponent} />
							</Switch>
						</div>
					</BrowserRouter>
				</div>
			</MuiThemeProvider>
    	)
	}

	createMenuItems() {
		return this.menuItems.map(itemsMapper);

		function itemsMapper(item) {
			return (<div key={item.id}>AAAA</div>);
		}
    }

}

export default App;