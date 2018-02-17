import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class MainContent extends React.Component {

	constructor(props) {
		super(props);
		this.createMenuItemsRoutes.bind(this);
	}

	createMenuItemsRoutes() {
		return this.props.items.map(itemsMapper);

		function itemsMapper(item) {
			return (
				<Route
					key={item.id}
					path={item.path}
					component={item.component}
				/>
			);
		}
	}

	render() {
		return (
			<div id="main-content">
				<Switch>
					{this.createMenuItemsRoutes.call(this)}
					<Redirect from="/" to="likes-counter" />
				</Switch>
			</div>
		);
	}
}

MainContent.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			path: PropTypes.string.isRequired,
			component: PropTypes.func.isRequired
		}).isRequired
	).isRequired
};

export default MainContent;
