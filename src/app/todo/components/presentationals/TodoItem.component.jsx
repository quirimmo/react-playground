import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li
                onClick={this.props.onClick}
                style={ {textDecoration: this.props.completed ? 'line-through' : 'none'} }
            >
                {this.props.text}
            </li>
        );
    }
}

TodoItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default TodoItem;