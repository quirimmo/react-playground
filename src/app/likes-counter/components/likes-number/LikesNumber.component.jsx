import React from 'react';

class LikesNumber extends React.Component {
    constructor(props) {
		super(props);
    }

    render() {
        return (
            <p>
                Total number of likes: {0}
            </p>
        );
    }
}

export default LikesNumber;