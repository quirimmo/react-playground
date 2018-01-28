const likesCounter = (state = [], action) => {
	switch (action.type) {
    	case 'LIKE':
            return state.likes++;
        case 'DISLIKE':
            return state.likes--;
    	default:
      		return state;
  	}
}

export default likesCounter;