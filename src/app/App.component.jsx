import React, { Component } from 'react';
import getTemlpate from './App.component.template.jsx';

class App extends Component {

	constructor(props) {
		super(props);
	}

	render () {
		return getTemlpate.call(this);
	}

	createMenuItems() {
		this.menuItems = [{
			id: 1,
			label: 'Test 1',
			path: '/my-path'
		}, {
			id: 2,
			label: 'Test 2',
			path: '/my-path-2'
		}];
		return this.menuItems.map(itemsMapper);

		function itemsMapper(item) {
			return (<div key={item.id}>AAAA</div>);
		}
    }

}

export default App;