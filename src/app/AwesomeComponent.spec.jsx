import React from 'react';
import AwesomeComponent from './AwesomeComponent';

describe('Comment item', () => {
    const wrapper = shallow( < AwesomeComponent / > );

    it('should be a list item', () => {
        expect(wrapper.type()).to.eql('li');
    });
});