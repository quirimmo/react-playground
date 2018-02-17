import React from 'react';
import PropTypes from 'prop-types';

class LikesDecrementer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button onClick={this.props.onClick}>
				DISLIKE!
			</button>
		);
	}
}

LikesDecrementer.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default LikesDecrementer;
