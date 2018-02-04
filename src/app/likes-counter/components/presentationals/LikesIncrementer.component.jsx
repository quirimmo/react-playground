import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class LikesIncrementer extends React.Component {
    constructor(props) {
		super(props);
    }

    render() {
        return (
            <RaisedButton label="LIKE!" secondary={true} in="true" onClick={this.props.onClick}/>
            // <button onClick={this.props.onClick}>
            //     LIKE!
            // </button>
        );
    }
}

export default LikesIncrementer;