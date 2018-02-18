import React from 'react';
import PropTypes from 'prop-types';

class LikesNumber extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <p>Total number of likes: {this.props.likes}</p>;
	}
}

LikesNumber.propTypes = {
	likes: PropTypes.number.isRequired
};

export default LikesNumber;
