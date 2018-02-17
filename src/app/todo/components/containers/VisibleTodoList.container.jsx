import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTodo } from './../../actions/todo.action.jsx';
import TodoList from './../presentationals/TodoList.component.jsx';

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed);
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed);
		case 'SHOW_ALL':
		default:
			return todos;
	}
};

const mapStateToProps = state => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
	onTodoClick: id => { dispatch(toggleTodo(id)); }
});

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

PropTypes.VisibleTodoList = {
};

export default VisibleTodoList;
