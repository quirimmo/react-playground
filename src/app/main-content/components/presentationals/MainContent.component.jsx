'use strict';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

class MainMenu extends React.Component {

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
                </Switch>
            </div>
        );
    }
}

export default MainMenu;