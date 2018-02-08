import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

class LikesDecrementer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        function test() {
            alert('test');
        }
        return (
            // <RaisedButton label="DISLIKE!" />
            <button onClick={this.props.onClick}>
                DISLIKE!
            </button>
        );
    }
}

export default LikesDecrementer;