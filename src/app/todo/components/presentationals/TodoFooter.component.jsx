import React from 'react';
import FilterLink from './../containers/FilterLink.container.jsx';

class TodoFooter extends React.Component {
	render() {
		return (
			<p>
				Show:
				{' '}
				<FilterLink filter="SHOW_ALL">
					All
				</FilterLink>
				{', '}
				<FilterLink filter="SHOW_ACTIVE">
					Active
				</FilterLink>
				{', '}
				<FilterLink filter="SHOW_COMPLETED">
					Completed
				</FilterLink>
			</p>
		);
	}
}

export default TodoFooter;
