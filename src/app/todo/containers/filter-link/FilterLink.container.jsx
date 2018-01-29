import { connect } from 'react-redux';
import { setVisibilityFilter } from './../../actions/todo.action.jsx';
import TodoLink from './../../components/todo-link/TodoLink.component.jsx';

const mapStateToProps = (state, ownProps) => {
  	return {
    	active: ownProps.filter === state.visibilityFilter
  	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
    	onClick: () => {
      		dispatch(setVisibilityFilter(ownProps.filter))
    	}
  	};
};

const FilterLink = connect(
	mapStateToProps,
  	mapDispatchToProps
)(TodoLink);

export default FilterLink;