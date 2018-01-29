const likesCounter = (state = 0, action) => {
	switch (action.type) {
		case 'LIKE':
            	return state + 1;
		case 'DISLIKE':
			return state > 0 ? state - 1 : state;
    		default:
      		return state;
  	}
}

export default likesCounter;