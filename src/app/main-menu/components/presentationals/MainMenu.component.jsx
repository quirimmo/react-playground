'use strict';

import React from 'react';

import LikesCounterContainer from './../../../likes-counter/components/containers/LikesCounter.component.jsx';
import Todo from './../../../todo/components/presentationals/Todo.component.jsx';

import getTemplate from './MainMenu.component.template.jsx';

class MainMenu extends React.Component {

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

    render() {
        return getTemplate.call(this);
    }
}

export default MainMenu;