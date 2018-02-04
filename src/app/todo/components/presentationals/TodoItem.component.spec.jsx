import React from 'react';

import Fade from './../../../animations/components/presentationals/Fade.component.jsx';
import TodoItem from './TodoItem.component.jsx';

describe('TodoItem Component', () => {
    const onClickSpy = spy();
    const wrapper = shallow(<TodoItem onClick={onClickSpy} completed={false} text="blablabla" />);

    beforeEach(() => {
        onClickSpy.reset();
    });

    it('should define the main component', () => {
        wrapper.should.not.be.undefined;
    });

    it('should define the Fade component', () => {
        wrapper.find('Fade').should.not.be.undefined;
    });


    describe('state', () => {
        describe('show', () => {
            it('should be true by default', () => {
                wrapper.instance().state.show.should.be.true;
            });

            it('should be false when unmounting', () => {
                wrapper.instance().componentWillUnmount();
                wrapper.instance().state.show.should.be.false;
            });
        });
    });

    describe('li', () => {
        const liItem = wrapper.find('li');

        it('should be defined', () => {
            liItem.should.not.be.undefined;
        });

        it('should defined the onClick property', () => {
            liItem.props().onClick.should.be.a('Function');
        });

        it('should not underline the item', () => {
            liItem.props().style.textDecoration.should.be.eql('none');
        });

        it('should define the right text in the item', () => {
            liItem.props().children.should.be.eql('blablabla');
        });

        it('should trigger the onClick prop', () => {
            liItem.simulate('click');
            onClickSpy.should.have.been.called;
        });
    });
});