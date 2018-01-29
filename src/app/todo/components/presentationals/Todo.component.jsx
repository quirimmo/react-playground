import React from 'react';

import TodoFooter from './TodoFooter.component.jsx';
import AddTodo from './../containers/AddTodo.container.jsx';
import VisibleTodoList from './../containers/VisibleTodoList.container.jsx';

const Todo = ({}) => (
    <div>
		<AddTodo />
		<VisibleTodoList />
		<TodoFooter />
	</div>
);

export default Todo;