import React from 'react';
import LikesDecrementer from './LikesDecrementer.component.jsx';

describe('LikesDecrementer', () => {
    const onClickSpy = spy();
    const wrapper = shallow(<LikesDecrementer onClick={onClickSpy} />);

    describe('general', () => {
        it('should define the main component', () => {
            wrapper.should.not.be.undefined;
        });
    });

    describe('props', () => {
        describe('onClick', () => {
            it('should be a Function', () => {
                wrapper.props().onClick.should.be.a('Function');
            });

            it('should have been called when clicking on the button', () => {
                wrapper.find('button').simulate('click');
                onClickSpy.should.have.been.called;
            });
        });
    });

    describe('HTML', () => {
        describe('button', () => {
            it('should be defined', () => {
                wrapper.find('button').should.not.be.undefined;
            });

            it('should contain the DISLIKE! text', () => {
                wrapper.find('button').text().should.be.eql('DISLIKE!');
            });
        });
    });
});