import { connect } from 'react-redux';
import { like, dislike } from './../../actions/likes-counter.action.jsx';
import LikesCounter from './../presentationals/LikesCounter.component.jsx';

export const mapStateToProps = state => ({
	likes: state.likesCounter
});

export const mapDispatchToProps = dispatch => ({
	onLike: () => {
		dispatch(like());
	},
	onDislike: () => {
		dispatch(dislike());
	}
});

const LikesCounterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LikesCounter);

export default LikesCounterContainer;
