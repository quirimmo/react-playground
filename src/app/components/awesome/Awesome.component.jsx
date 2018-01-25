import React from 'react';
import getTemplate from './Awesome.component.template.jsx';

class AwesomeComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			likesCount: 0
		};
		this.onLike = this.onLike.bind(this);
	}

	onLike() {
		this.setState({
			likesCount: this.state.likesCount + 1
		});
	}

	render() {
		return getTemplate.call(this);
	}
}

export default AwesomeComponent;