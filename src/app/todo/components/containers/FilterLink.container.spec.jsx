import React from 'react';
import configureStore from 'redux-mock-store';
import FilterLinkContainer from './FilterLink.container.jsx';
import { mapDispatchToProps } from './FilterLink.container.jsx';

describe('FilterLink Container Component', () => {
	const mockStore = configureStore();
	let store = mockStore({
		visibilityFilter: 'MY FILTER'
	});
	let wrapper;

	describe('general', () => {
		it('should be defined', () => {
			wrapper = shallow(
				<FilterLinkContainer filter="blablabla" store={store}>
					Text
				</FilterLinkContainer>
			);
			wrapper.should.not.be.undefined;
		});
	});

	describe('state props', () => {
		describe('active', () => {
			it('should be a boolean', () => {
				wrapper = shallow(
					<FilterLinkContainer filter="blablabla" store={store}>
						Text
					</FilterLinkContainer>
				);
				wrapper.props().active.should.be.a('Boolean');
			});

			it('should be false if filter prop is not equal to the visibilityFilter state', () => {
				wrapper = shallow(
					<FilterLinkContainer filter="blablabla" store={store}>
						Text
					</FilterLinkContainer>
				);
				wrapper.props().active.should.be.eql(false);
			});

			it('should be true if filter prop is equal to the visibilityFilter state', () => {
				wrapper = shallow(
					<FilterLinkContainer filter="MY FILTER" store={store}>
						Text
					</FilterLinkContainer>
				);
				wrapper.props().active.should.be.true;
			});
		});
	});

	describe('dispatch props', () => {
		describe('onClick', () => {
			it('should be a Function', () => {
				wrapper.props().onClick.should.be.a('Function');
			});
		});
	});
});
