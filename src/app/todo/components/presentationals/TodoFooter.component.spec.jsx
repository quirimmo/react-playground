import React from 'react';

import TodoFooter from './TodoFooter.component.jsx';
import FilterLink from './../containers/FilterLink.container.jsx';

describe('TodoFooter Component', () => {
	const wrapper = shallow(<TodoFooter />);

	it('should define the main component', () => {
		wrapper.should.not.be.undefined;
	});

	it('should define the 3 FilterLink components', () => {
		wrapper.find(FilterLink).length.should.be.eql(3);
	});

	it('should define the SHOW_ALL FilterLink component', () => {
		wrapper
			.find(FilterLink)
			.at(0)
			.props()
			.filter.should.be.eql('SHOW_ALL');
		wrapper
			.find(FilterLink)
			.at(0)
			.props()
			.children.should.be.eql('All');
	});

	it('should define the SHOW_ACTIVE FilterLink component', () => {
		wrapper
			.find(FilterLink)
			.at(1)
			.props()
			.filter.should.be.eql('SHOW_ACTIVE');
		wrapper
			.find(FilterLink)
			.at(1)
			.props()
			.children.should.be.eql('Active');
	});

	it('should define the SHOW_COMPLETED FilterLink component', () => {
		wrapper
			.find(FilterLink)
			.at(2)
			.props()
			.filter.should.be.eql('SHOW_COMPLETED');
		wrapper
			.find(FilterLink)
			.at(2)
			.props()
			.children.should.be.eql('Completed');
	});
});
