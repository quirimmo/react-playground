'use strict';

import React from 'react';
import { connect } from 'react-redux';

import LikesNumber from './LikesNumber.component.jsx';
import LikesIncrementer from './LikesIncrementer.component.jsx';
import LikesDecrementer from './LikesDecrementer.component.jsx';


class LikesCounter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LikesNumber likes={this.props.likes} />
                <div>
                    <LikesIncrementer onClick={this.props.onLike} />
                    <LikesDecrementer onClick={this.props.onDislike} />
                </div>
            </div>
        );
    }
}

export default LikesCounter;