import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from './../../actions/todo.action.jsx';

class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.input = null;
		this.onTodoSubmit = this.onTodoSubmit.bind(this);
	}

	onTodoSubmit(e) {
		e.preventDefault();
		if (!this.input.value.trim()) return;
		this.props.dispatch(addTodo(this.input.value));
		this.input.value = '';
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onTodoSubmit}>
					<input
						ref={node => {
							this.input = node;
						}}
					/>
					<button type="submit">Add Todo</button>
				</form>
			</div>
		);
	}
}

AddTodo.propTypes = {
	dispatch: PropTypes.func.isRequired
};

AddTodo = connect()(AddTodo);
export default AddTodo;
