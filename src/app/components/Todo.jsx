import React from 'react';

const NewTodo = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={ {textDecoration: completed ? 'line-through' : 'none'} }
    >
        {text}
    </li>
);

export default NewTodo;