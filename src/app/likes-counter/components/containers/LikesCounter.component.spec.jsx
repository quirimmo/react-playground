import React from 'react';
import configureStore from 'redux-mock-store';
import LikesCounterContainer from './LikesCounter.component.jsx';
import {mapDispatchToProps} from './LikesCounter.component.jsx';
import { like, dislike } from './../../actions/likes-counter.action.jsx';

describe('LikesCounter Container Component', () => {
    const mockStore = configureStore();
    let store = mockStore({
        likesCounter: 0
    });
    const wrapper = shallow(<LikesCounterContainer store={store}/>);

    describe('general', () => {
        it('should be defined', () => {
            wrapper.should.not.be.undefined;
        });
    });

    describe('state props', () => {
        describe('likes', () => {
            it('should be a number', () => {
                wrapper.props().likes.should.be.a('Number');
            });

            it('should be 0 by default', () => {
                wrapper.props().likes.should.be.eql(0);
            });

            it('should dispatch the right LIKE action', () => {
                const dispatchSpy = spy();
                const { onLike } = mapDispatchToProps(dispatchSpy);
                onLike();
                dispatchSpy.should.have.been.calledWith(like());
            });

            it('should dispatch the right DISLIKE action', () => {
                const dispatchSpy = spy();
                const { onDislike } = mapDispatchToProps(dispatchSpy);
                onDislike();
                dispatchSpy.should.have.been.calledWith(dislike());
            });
        });
    });

    describe('dispatch props', () => {
        describe('onLike', () => {
            it('should be a Function', () => {
                wrapper.props().onLike.should.be.a('Function');
            });
        });

        describe('onDislike', () => {
            it('should be a Function', () => {
                wrapper.props().onDislike.should.be.a('Function');
            });
        });
    });
});