import React from 'react';
import TodoItem from './TodoItem.component.jsx';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => (
                    <TodoItem key={index} {...todo} onClick={() => this.props.onTodoClick(index)} />
                ))}
            </ul>
        );
    }
}

export default TodoList;