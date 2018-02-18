import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MainMenu from './main-menu/components/presentationals/MainMenu.component.jsx';
import MainContent from './main-content/components/presentationals/MainContent.component.jsx';
import LikesCounterContainer from './likes-counter/components/containers/LikesCounter.container.jsx';
import Todo from './todo/components/presentationals/Todo.component.jsx';
import PerformancesBarChartPage from './performances-bar-chart/components/presentationals/PerformancesBarChartPage.component.jsx';

import './../../assets/styles/main.scss';


class App extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const menuItems = [{
			id: 1,
			label: 'Likes Counter',
			path: '/likes-counter',
			component: LikesCounterContainer
		}, {
			id: 2,
			label: 'Todo',
			path: '/todo',
			component: Todo
		}, {
			id: 3,
			label: 'Performances Bar Chart',
			path: '/performances-bar-chart',
			component: PerformancesBarChartPage
		}];

		return (
			<MuiThemeProvider>
				<div>
					<DocumentTitle title='React Playground'></DocumentTitle>
					<HashRouter>
						<div>
							<div>
								<MainMenu items={menuItems} />
							</div>
							<div>
								<MainContent items={menuItems} />
							</div>
						</div>
					</HashRouter>
				</div>
			</MuiThemeProvider>
		);
	}

}

export default App;
