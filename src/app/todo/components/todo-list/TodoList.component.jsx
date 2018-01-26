import React from 'react';
import TodoItem from './../todo-item/TodoItem.component.jsx';

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map((todo, index) => (
            <TodoItem key={index} {...todo} onClick={() => onTodoClick(index)} />
        ))}
    </ul>
);

export default TodoList;