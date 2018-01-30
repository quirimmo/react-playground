'use strict';

import React from 'react';
import { HashRouter , Route, NavLink, Switch } from 'react-router-dom';

import styles from './../../styles/style.scss';

function getTemplate() {

    return (
        <HashRouter>
            <div>
                <div id="main-menu">
                    {createMenuItemsLinks.call(this)}
                </div>
                <Switch>
                    {createMenuItemsRoutes.call(this)}
                </Switch>
            </div>
        </HashRouter>
    );

    function createMenuItemsLinks() {
		return this.state.menuItems.map(itemsMapper);

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

	function createMenuItemsRoutes() {
		return this.state.menuItems.map(itemsMapper);

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
}

export default getTemplate;