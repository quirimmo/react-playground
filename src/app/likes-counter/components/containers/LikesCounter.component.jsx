import { connect } from 'react-redux';

import { like } from './../../actions/likes-counter.action.jsx';

import LikesCounter from './../presentationals/LikesCounter.component.jsx';

const mapStateToProps = (state, ownProps) => {
  	return {
		likes: state.likesCounter
		// onClick: () => { alert('FFS'); }
  	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
    	onClick: () => {
			console.log('on click!');
			dispatch(like());
    	}
  	};
};

const LikesCounterContainer = connect(
	mapStateToProps,
  	mapDispatchToProps
)(LikesCounter);

export default LikesCounterContainer;