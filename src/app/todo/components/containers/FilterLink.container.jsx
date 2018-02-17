import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setVisibilityFilter } from './../../actions/todo.action.jsx';
import TodoLink from './../presentationals/TodoLink.component.jsx';

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => { dispatch(setVisibilityFilter(ownProps.filter)); }
});

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoLink);

PropTypes.FilterLink = {
	filter: PropTypes.string.isRequired
};

export default FilterLink;
