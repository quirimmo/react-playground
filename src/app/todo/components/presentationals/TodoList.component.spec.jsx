import React from 'react';
import TodoList from './TodoList.component.jsx';
import TodoItem from './TodoItem.component.jsx';

describe('TodoList', () => {
    const todos = [{}, {}, {}];
    const wrapper = shallow(<TodoList todos={todos} />);

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