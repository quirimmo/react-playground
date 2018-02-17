import React from 'react';

import TodoFooter from './TodoFooter.component.jsx';
import AddTodo from './../containers/AddTodo.container.jsx';
import VisibleTodoList from './../containers/VisibleTodoList.container.jsx';

class Todo extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<AddTodo />
				<VisibleTodoList />
				<TodoFooter />
			</div>
		);
	}

}

export default Todo;
