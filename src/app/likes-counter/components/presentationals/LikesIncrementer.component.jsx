import React from 'react';

class LikesIncrementer extends React.Component {
    constructor(props) {
		super(props);
    }

    render() {
        return (
            <button onClick={this.props.onClick}>
                LIKE!
            </button>
        );
    }
}

export default LikesIncrementer;