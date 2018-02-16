import React from 'react';
import configureStore from 'redux-mock-store';

import AddTodoContainer from './AddTodo.container.jsx';
import { addTodo } from './../../actions/todo.action.jsx';

describe('AddTodo Container Container Component', () => {
    const mockStore = configureStore();
    let store = mockStore({});
    const dispatchSpy = spy();
    store.dispatch = dispatchSpy;
    const dispatchFn = () => {};
    const wrapper = shallow(<AddTodoContainer dispatch={dispatchFn} store={store}/>);
    const wrapperInstance = wrapper.instance();
    const divedWrapper = wrapper.dive();
    const divedWrapperInstance = wrapper.dive().instance();

    describe('general', () => {
        it('should be defined', () => {
            wrapper.should.not.be.undefined;
        });
    });

    describe('state props', () => {
        describe('dispatch', () => {
            it('should be a function', () => {
                wrapper.props().dispatch.should.be.a('Function');
            });
        });
    });

    describe('methods', () => {
        describe('onTodoSubmit', () => {
			beforeEach(() => {
				dispatchSpy.reset();
			});

            it('should be a function', () => {
                divedWrapperInstance.onTodoSubmit.should.be.a('Function');
            });

			const preventDefaultSpy = spy();
			const event = { preventDefault: preventDefaultSpy };

            describe('input filled', () => {

                beforeEach(() => {
                    divedWrapperInstance.input = { value: 'test' };
                });

                it('should call the preventDefault on the event', () => {
                    divedWrapperInstance.onTodoSubmit(event);
                    preventDefaultSpy.should.have.been.called;
                });

                it('should call the dispatch passing the right values', () => {
                    divedWrapperInstance.onTodoSubmit(event);
                    dispatchSpy.should.have.been.calledWith({ id: 2, text: "test", type: "ADD_TODO" });
                });

                it('should reset the input value', () => {
                    divedWrapperInstance.onTodoSubmit(event);
                    divedWrapperInstance.input.value.should.be.eql('');
                });
			});

			describe('input not filled', () => {
                const preventDefaultSpy = spy();
                const event = { preventDefault: preventDefaultSpy };

                beforeEach(() => {
                    divedWrapperInstance.input = { value: '' };
                });

                it('should call the preventDefault on the event', () => {
                    divedWrapperInstance.onTodoSubmit(event);
                    preventDefaultSpy.should.have.been.called;
                });

                it('should not call the dispatch passing the right values', () => {
					divedWrapperInstance.onTodoSubmit(event);
                    dispatchSpy.should.not.have.been.called;
                });
            });
        });
    });

    describe('HTML', () => {
        describe('form', () => {
            beforeEach(() => {
                divedWrapperInstance.input = { value: 'test' };
            });

            it('should define the form element', () => {
                divedWrapper.find('form').should.not.be.undefined;
            });
		});

		describe('input', () => {
			beforeEach(() => {
                divedWrapperInstance.input = { value: 'test' };
			});

            it('should define the input element', () => {
                divedWrapper.find('input').should.not.be.undefined;
			});
		});

		describe('button', () => {
			it('should define the button element', () => {
                divedWrapper.find('button').should.not.be.undefined;
			});

			it('should define the button element witht the right text', () => {
				divedWrapper.find('button').text().should.be.eql('Add Todo');
			});
        });
    });

});