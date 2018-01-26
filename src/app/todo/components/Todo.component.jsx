import React from 'react';

import TodoFooter from './todo-footer/TodoFooter.component.jsx';
import AddTodo from './../containers/add-todo/AddTodo.container.jsx';
import VisibleTodoList from './../containers/VisibleTodoList.jsx';

const Todo = ({}) => (
    <div>
		<AddTodo />
		<VisibleTodoList />
		<TodoFooter />
	</div>
);

export default Todo;