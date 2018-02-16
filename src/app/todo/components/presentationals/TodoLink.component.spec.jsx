import React from 'react';
import TodoLink from './TodoLink.component.jsx';

describe('TodoLink', () => {
    const onClick = () => {};
    describe('active', () => {
        const wrapper = shallow(<TodoLink onClick={onClick} active={true}>Hello World</TodoLink>);

        it('should define the span element only', () => {
            wrapper.find('span').should.not.be.null;
        });

        it('should define the given text inside the span', () => {
            wrapper.find('span').text().should.be.eql('Hello World');
        });
    });

    describe('not active', () => {
        const wrapper = shallow(<TodoLink onClick={onClick} active={false}>Hello World</TodoLink>);

        it('should define the a element', () => {
            wrapper.find('a').should.not.be.null;
        });

        it('should define the given text inside the a', () => {
            wrapper.find('a').text().should.be.eql('Hello World');
        });
    });
});