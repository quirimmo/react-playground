import React from 'react';
import TodoList from './TodoList.component.jsx';
import TodoItem from './TodoItem.component.jsx';

describe('TodoList', () => {
    const onTodoClickFn = () => {};
    const todos = [{
        completed: false,
        id: 0,
        text: 'A'
    }, {
        completed: false,
        id: 1,
        text: 'B'
    }, {
        completed: false,
        id: 2,
        text: 'C'
    }];

    const wrapper = shallow(<TodoList onTodoClick={onTodoClickFn} todos={todos} />);

    it('should define the main element', () => {
        wrapper.should.not.be.null;
    });

    it('should define the ul element', () => {
        wrapper.find('ul').should.not.be.null;
    });

    it('should define all the items element', () => {
        wrapper.find(TodoItem).should.have.length(3);
    });

});