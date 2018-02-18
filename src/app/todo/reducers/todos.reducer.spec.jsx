import todos from './todos.reducer.jsx';

describe('todos reducer', () => {
	describe('ADD_TODO', () => {
		it('should add a todo item in the state list', () => {
			const action = { type: 'ADD_TODO', id: 1, text: 'Hello World' };
			todos(undefined, action).should.be.eql([
				{ id: 1, text: 'Hello World', completed: false }
			]);
		});
	});

	describe('TOGGLE_TODO', () => {
		it('should invert the completed property', () => {
			const action = { type: 'TOGGLE_TODO', id: 1 };
			todos([{ id: 1, completed: true }], action).should.be.eql([
				{ id: 1, completed: false }
			]);
		});
	});
});
