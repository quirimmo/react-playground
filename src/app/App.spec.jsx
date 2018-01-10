import React from 'react';
import App from './App.jsx';

describe('Comment item', () => {
    const wrapper = shallow(<App/>);

    it('should be a list item', () => {
        wrapper.should.not.be.undefined;
    });
});