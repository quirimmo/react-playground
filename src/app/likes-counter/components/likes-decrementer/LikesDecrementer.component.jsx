import React from 'react';

class LikesDecrementer extends React.Component {
    constructor(props) {
		super(props);
    }

    render() {
        return (
            <button onClick={alert.bind(window, 'disliked!')}>
                DISLIKE!
            </button>
        );
    }
}

export default LikesDecrementer;