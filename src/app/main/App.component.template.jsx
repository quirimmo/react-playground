'use strict';

import React from 'react';
import { render } from 'react-dom';
import { HashRouter , BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { BarChart } from 'react-d3-components';

import css from './../../../../assets/styles/main.scss';

import AwesomeComponent from './../awesome/Awesome.component.jsx';
// import NewTodoList from './../TodoList.jsx';
// import TodoListComponent from './../todo-list/TodoList.component.jsx';

import Todo from './../../components/todo/Todo.component.jsx';


function getTemplate() {

    var tooltip = function(x, y0, y, total) {
		return y.toString();
    };

	var data = [{
		label: 'somethingA',
		values: [
			{ x: 'A', y: 10 },
			{ x: 'B', y: 4 },
			{ x: 'C', y: 3 },
			{ x: 'D', y: -3 }
		]
	}];


    return (
        <MuiThemeProvider>
            <div>
                <TodoListWrapper />
                <br/>
                <BarChart
                    data={data}
                    width={800}
					height={400}
					barPadding={0.8}
                    margin={{top: 10, bottom: 50, left: 50, right: 10}}
                    tooltipHtml={tooltip}
					colorByLabel={false}
					xAxis={{innerTickSize: 5, label: "x-label"}}
                    yAxis={{label: "y-label"}}
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
                        <Link to='/todo-list-ultimate'>Todo List Ultimate</Link>
                        <Switch>
                            <Route path='/awesome-component' component={AwesomeComponent} />
                            <Route path='/todo-list-ultimate' component={TodoListWrapper} />
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        </MuiThemeProvider>
    );
}

export default getTemplate;