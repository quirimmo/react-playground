import React from 'react';
import configureStore from 'redux-mock-store';

import AddTodoContainer from './AddTodo.container.jsx';
import { addTodo } from './../../actions/todo.action.jsx';

describe('AddTodo Container Container Component', () => {
    const mockStore = configureStore();
    let store = mockStore({});
    const dispatchSpy = spy();
    store.dispatch = dispatchSpy;
    const wrapper = shallow(<AddTodoContainer store={store}/>);
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

    // describe('HTML', () => {
    //     const divedWrapper = wrapper.dive();
    //     const divedWrapperInstance = divedWrapper.instance();

    //     describe('form', () => {

    //         beforeEach(() => {
    //             divedWrapperInstance.input = { value: 'test' };
    //         });

    //         it('should define the form element', () => {
    //             wrapper.find('form').should.not.be.undefined;
    //         });

    //         it('should call the onTodoSubmit method on submit', () => {
    //             wrapper.find('form').simulate('submit');
    //             // divedWrapperInstance.onTodoSubmit({ preventDefault: function() {} });
    //             // const onTodoSubmitSpy = spy();
    //             // divedWrapperInstance.onTodoSubmit = onTodoSubmitSpy;
    //             // console.log(divedWrapperInstance);

    //             // divedWrapperInstance.onTodoSubmit({preventDefault: function() {}});
    //             // divedWrapperInstance.onTodoSubmit = function() {
    //             //     console.log('FFS');
    //             // };
    //             // divedWrapper.find('form').simulate('submit');
    //             // console.log(divedWrapper.find('form'));
    //             // divedWrapperInstance.onTodoSubmit();


    //             // const form = wrapper.dive().find('form');
    //             // form.props().onSubmit = spy();
    //             // console.log(form.props().onSubmit);
    //             // wrapper.dive().find('form').simulate('submit', {
    //             //     preventDefault: () => {}
    //             // });


    //             // console.log(mount(wrapper.dive().find('form').html()));

    //             // wrapper.dive().instance().onTodoSubmit = function() {
    //             //     console.log('fuck off');
    //             // };
    //             // wrapper.dive().find('form').simulate('submit', {
    //             //     preventDefault: () => {}
    //             // });

    //             // wrapper.instance().onTodoSubmit();
    //             // wrapper.dive().instance().onTodoSubmit({ preventDefault: function() {} });
    //             // console.log(wrapper.dive().instance().onTodoSubmit);

    //             // wrapper.dive().instance().onTodoSubmit = function() {
    //             //     console.log('blablabla');
    //             // };
    //             // wrapper.dive().find('form').simulate('submit', {
    //             //     preventDefault: () => {}
    //             // });
    //             // onTodoSubmitSpy.should.have.been.called;
    //         });
    //     });
    // });

});