import { addTodo, setVisibilityFilter, toggleTodo } from './todo.action.jsx';

describe('todo actions', () => {
	describe('addTodo', () => {
		it('should return an acion object of type ADD_TODO', () => {
			addTodo('test').should.be.eql({
				type: 'ADD_TODO',
				id: 0,
				text: 'test'
			});
		});
	});

	describe('setVisibilityFilter', () => {
		it('should return an acion object of type SET_VISIBILITY_FILTER', () => {
			setVisibilityFilter('test').should.be.eql({
				type: 'SET_VISIBILITY_FILTER',
				filter: 'test'
			});
		});
	});

	describe('toggleTodo', () => {
		it('should return an acion object of type TOGGLE_TODO', () => {
			toggleTodo(1).should.be.eql({
				type: 'TOGGLE_TODO',
				id: 1
			});
		});
	});
});
