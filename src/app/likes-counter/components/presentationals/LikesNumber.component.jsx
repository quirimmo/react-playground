import React from 'react';

class LikesNumber extends React.Component {
    constructor(props) {
		super(props);
    }

    render() {
        return (
            <p>
                Total number of likes: {this.props.likes}
            </p>
        );
    }
}

export default LikesNumber;