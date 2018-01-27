import React from 'react';

import TodoFooter from './todo-footer/TodoFooter.component.jsx';
import AddTodo from './../containers/add-todo/AddTodo.container.jsx';
import VisibleTodoList from './../containers/visible-todo-list/VisibleTodoList.container.jsx';

const Todo = ({}) => (
    <div>
		<AddTodo />
		<VisibleTodoList />
		<TodoFooter />
	</div>
);

export default Todo;