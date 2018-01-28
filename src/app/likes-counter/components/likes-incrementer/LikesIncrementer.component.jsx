import React from 'react';

class LikesIncrementer extends React.Component {
    constructor(props) {
		super(props);
    }

    render() {
        return (
            <button onClick={alert.bind(window, 'liked!')}>
                LIKE!
            </button>
        );
    }
}

export default LikesIncrementer;