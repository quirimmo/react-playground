import React from 'react';
import configureStore from 'redux-mock-store';

import VisibleTodoListContainer from './VisibleTodoList.container.jsx';
import { mapDispatchToProps } from './VisibleTodoList.container.jsx';

describe('VisibleTodoList Container Component', () => {
    const mockStore = configureStore();
    const todosList = [
        {
            id: 1,
            completed: false
        },
        {
            id: 2,
            completed: false
        },
        {
            id: 3,
            completed: true
        }
    ];

    describe('general', () => {
        const store = mockStore({
            todos: todosList
        });
        const wrapper = shallow(<VisibleTodoListContainer store={store}/>);

        it('should be defined', () => {
            wrapper.should.not.be.undefined;
        });

        describe('dispatch props', () => {
            describe('onTodoClick', () => {
                it('should be defined', () => {
                    wrapper.props().onTodoClick.should.be.a('Function');
                });
            });
        });
    });

    describe('show all', () => {
        const store = mockStore({
            todos: todosList
        });
        const wrapper = shallow(<VisibleTodoListContainer store={store}/>);

        it('should return all the todos', () => {
            wrapper.props().todos.should.have.length(3);
        });
    });

    describe('show completed', () => {
        const store = mockStore({
            todos: todosList,
            visibilityFilter: 'SHOW_COMPLETED'
        });
        const wrapper = shallow(<VisibleTodoListContainer store={store}/>);

        it('should return the completed todos', () => {
            wrapper.props().todos.should.have.length(1);
        });
    });

    describe('show not completed', () => {
        const store = mockStore({
            todos: todosList,
            visibilityFilter: 'SHOW_ACTIVE'
        });
        const wrapper = shallow(<VisibleTodoListContainer store={store}/>);

        it('should return the not completed todos', () => {
            wrapper.props().todos.should.have.length(2);
        });
    });
});