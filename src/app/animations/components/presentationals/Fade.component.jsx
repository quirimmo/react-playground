import React from 'react';
import { CSSTransition } from 'react-transition-group';

import css from './../../styles/style.scss';

class Fade extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CSSTransition
                {...this.props}
                timeout={this.props.duration}
                classNames="fade"
            >
                {this.props.children}
            </CSSTransition>
        );
    }
}

export default Fade;