import React from 'react';
import Todo from './Todo.jsx';

class NewTodoList extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <ul>
                {this.props.todos.map((todo, index) => (
                    <Todo key={index} {...todo} onClick={() => this.props.onTodoClick(index)} />
                ))}
            </ul>
        );
    }
}

export default NewTodoList;