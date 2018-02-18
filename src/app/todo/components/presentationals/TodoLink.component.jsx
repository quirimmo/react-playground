import React from 'react';
import PropTypes from 'prop-types';

class TodoLink extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.active) {
			return <span>{this.props.children}</span>;
		}
		return (
			<a
				href=""
				onClick={e => {
					e.preventDefault();
					this.props.onClick();
				}}
			>
				{this.props.children}
			</a>
		);
	}
}

TodoLink.propTypes = {
	onClick: PropTypes.func.isRequired,
	active: PropTypes.bool.isRequired,
	children: PropTypes.string.isRequired
};

export default TodoLink;
