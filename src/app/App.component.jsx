'use strict';

import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { BarChart } from 'react-d3-components';

import LikesCounterContainer from './likes-counter/components/containers/LikesCounter.component.jsx';
import Todo from './todo/components/presentationals/Todo.component.jsx';
import MainMenu from './main-menu/components/presentationals/MainMenu.component.jsx';
import MainContent from './main-content/components/presentationals/MainContent.component.jsx';

import css from './../../assets/styles/main.scss';


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

	render () {
		return (
			<MuiThemeProvider>
				<div>
					<HashRouter>
						<div>
							<div>
								<MainMenu items={this.state.menuItems} />
							</div>
							<div>
								<MainContent items={this.state.menuItems} />
							</div>
						</div>
					</HashRouter>
				</div>
			</MuiThemeProvider>
		);
	}

}

export default App;