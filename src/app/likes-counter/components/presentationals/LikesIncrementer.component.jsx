import React from 'react';
import PropTypes from 'prop-types';

class LikesIncrementer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <button onClick={this.props.onClick}>LIKE!</button>;
	}
}

LikesIncrementer.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default LikesIncrementer;
