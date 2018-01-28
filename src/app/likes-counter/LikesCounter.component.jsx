import React from 'react';

class LikesCounter extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			likesCount: 0
		};
		this.onLike = this.onLike.bind(this);
		this.onDislike = this.onDislike.bind(this);
	}

	onLike() {
		this.setState({
			likesCount: this.state.likesCount + 1
		});
	}

	onDislike() {
		if (this.state.likesCount) {
			this.setState({
				likesCount: this.state.likesCount - 1
			});
		}
	}

	render() {
		return (
			<div>
				Likes: <span>{this.state.likesCount}</span> 
				<div>
					<button onClick={this.onLike}>Like Me!</button>
					<button onClick={this.onDislike}>Dislike Me!</button>
				</div>
			</div>
		);
	}
}

export default LikesCounter;