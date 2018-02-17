import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './../../styles/style.scss';

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


MainMenu.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			path: PropTypes.string.isRequired
		}).isRequired
	).isRequired
};

export default MainMenu;
