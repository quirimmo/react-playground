import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

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