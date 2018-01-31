'use strict';

import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './../../styles/style.scss';

class MainMenu extends React.Component {

    constructor(props) {
		super(props);
		this.createMenuItemsLinks.bind(this);
	}

	createMenuItemsLinks() {
		return this.props.items.map(itemsMapper);

		function itemsMapper(item) {
			return (
				<NavLink
					key={item.id}
					to={item.path}
					activeClassName="active"
				>
					{item.label}
				</NavLink>
			);
		}
	}

    render() {
		return (
			<div id="main-menu">
				{this.createMenuItemsLinks.call(this)}
			</div>
		);
    }
}

export default MainMenu;