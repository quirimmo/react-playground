import React from 'react';
import Todo from './Todo.component.jsx';
import TodoFooter from './TodoFooter.component.jsx';
import AddTodo from './../containers/AddTodo.container.jsx';
import VisibleTodoList from './../containers/VisibleTodoList.container.jsx';

describe('Todo Component', () => {
    const wrapper = shallow(<Todo />);

    it('should define the main component', () => {
        wrapper.should.not.be.undefined;
    });

    it('should define the TodoFooter component', () => {
        wrapper.find(TodoFooter).should.not.be.undefined;
    });

    it('should define the VisibleTodoList component', () => {
        wrapper.find(VisibleTodoList).should.not.be.undefined;
    });

    it('should define the AddTodo component', () => {
        wrapper.find(AddTodo).should.not.be.undefined;
    });
});