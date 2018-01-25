import React from 'react';
import LikesCounter from './LikesCounter.jsx';

describe('Comment item', () => {
    const wrapper = shallow(<LikesCounter/>);

    it('should be a list item', () => {
        expect(wrapper.type()).to.eql('div');
    });
});