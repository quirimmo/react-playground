import React from 'react';
import PropTypes from 'prop-types';
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

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
            completed: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default TodoList;