const likesCounter = (state = 0, action) => {
	switch (action.type) {
		case 'LIKE':
			console.log('upgrading likes');
			console.log(state);
            return state++;
        case 'DISLIKE':
            return state--;
    	default:
      		return state;
  	}
}

export default likesCounter;