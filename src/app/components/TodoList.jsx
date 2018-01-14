import React from 'react';
import Todo from './Todo.jsx';

const NewTodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
        ))}
    </ul>
)

export default NewTodoList;