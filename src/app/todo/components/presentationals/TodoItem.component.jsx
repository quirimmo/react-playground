import React from 'react';
import Fade from './../../../animations/Fade.component.jsx';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { show: false };
    }

    componentDidMount() {
        this.setState({
            show: true
        });
    }

    componentWillUnmount() {
        this.setState({
            show: false
        });
    }

    render() {
        return (
            <Fade in={this.state.show} duration={300}>
                <li
                    onClick={this.props.onClick}
                    style={ {textDecoration: this.props.completed ? 'line-through' : 'none'} }
                >
                    {this.props.text}
                </li>
            </Fade>
        );
    }
}

export default TodoItem;