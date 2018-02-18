import React from 'react';
import LikesNumber from './LikesNumber.component.jsx';

describe('LikesNumber', () => {
	const likes = 10;
	const wrapper = shallow(<LikesNumber likes={likes} />);

	describe('general', () => {
		it('should define the main component', () => {
			wrapper.should.not.be.undefined;
		});
	});

	describe('HTML', () => {
		describe('p', () => {
			it('should contain the right text showing likes number', () => {
				wrapper
					.find('p')
					.text()
					.should.be.eql('Total number of likes: 10');
			});
		});
	});
});
