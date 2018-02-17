import React from 'react';
import PropTypes from 'prop-types';

import LikesNumber from './LikesNumber.component.jsx';
import LikesIncrementer from './LikesIncrementer.component.jsx';
import LikesDecrementer from './LikesDecrementer.component.jsx';

class LikesCounter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<LikesNumber likes={this.props.likes} />
				<div>
					<LikesIncrementer onClick={this.props.onLike} />
					<LikesDecrementer onClick={this.props.onDislike} />
				</div>
			</div>
		);
	}
}

LikesCounter.propTypes = {
	likes: PropTypes.number.isRequired,
	onLike: PropTypes.func.isRequired,
	onDislike: PropTypes.func.isRequired
};

export default LikesCounter;
