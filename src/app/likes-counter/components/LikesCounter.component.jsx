import React from 'react';
import LikesNumber from './likes-number/LikesNumber.component.jsx';
import LikesIncrementer from './likes-incrementer/LikesIncrementer.component.jsx';
import LikesDecrementer from './likes-decrementer/LikesDecrementer.component.jsx';


class LikesCounter extends React.Component {
    render() {
        return (
            <div>
                <LikesNumber />
                <div>
                    <LikesIncrementer />
                    <LikesDecrementer />
                </div>
            </div>
        );
    }
}

export default LikesCounter;