import React from 'react';

class LikesDecrementer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.onClick}>
                DISLIKE!
            </button>
        );
    }
}

export default LikesDecrementer;