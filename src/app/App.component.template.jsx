'use strict';

import React from 'react';
import { render } from 'react-dom';
import { HashRouter , BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import AwesomeComponent from './AwesomeComponent.jsx';
import TodoListComponent from './TodoListComponent.jsx';

import css from './../../assets/styles/main.scss';

import { BarChart } from 'react-d3-components';


function getTemplate() {

    var tooltip = function(x, y0, y, total) {
            return y.toString();
    };

	var data = [{
		label: 'somethingA',
		values: [
			{ x: 'SomethingA', y: 10 },
			{ x: 'SomethingB', y: 4 },
			{ x: 'SomethingC', y: 3 },
			{ x: 'SomethingD', y: -3 }
		]
	}];


    return (
        <MuiThemeProvider>
            <div>
                <BarChart
                    data={data}
                    width={800}
                    height={400}
                    margin={{top: 10, bottom: 50, left: 50, right: 10}}
                    tooltipHtml={tooltip}
                    colorByLabel={false}
                />,
                <br/>
                <RaisedButton label="Default" />
                <p>Hello React Project</p>
                <br/>
                <AwesomeComponent />
                <br/>
                <TodoListComponent />
                <br/>
                <div>{this.createMenuItems()}</div>
                <HashRouter>
                    <div>
                        <Link to='/awesome-component'>Awesome Component</Link>
                        <Link to='/todo'>Todo List</Link>
                        <Switch>
                            <Route path='/awesome-component' component={AwesomeComponent} />
                            <Route path='/todo' component={TodoListComponent} />
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        </MuiThemeProvider>
    );
}

export default getTemplate;