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

import Footer from './components/Footer.jsx';
import AddTodo from './containers/AddTodo.jsx';
import VisibleTodoList from './containers/VisibleTodoList.jsx';


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
                <div>
                    <AddTodo />
                    <VisibleTodoList />
                    <Footer />
                </div>
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
                />
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
                        <Link to='/new-todo'>New Todo List</Link>
                        <Switch>
                            <Route path='/awesome-component' component={AwesomeComponent} />
                            <Route path='/todo' component={TodoListComponent} />
                            <Route path='/new-todo' component={AddTodo} />
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        </MuiThemeProvider>
    );
}

export default getTemplate;