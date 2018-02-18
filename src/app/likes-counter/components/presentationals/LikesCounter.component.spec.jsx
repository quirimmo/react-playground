import React from 'react';
import LikesCounter from './LikesCounter.component.jsx';
import LikesNumberComponent from './LikesNumber.component.jsx';
import LikesIncrementerComponent from './LikesIncrementer.component.jsx';
import LikesDecrementerComponent from './LikesDecrementer.component.jsx';

describe('LikesCounter', () => {
	const likes = 0;
	const onLike = () => {};
	const onDislike = () => {};
	const wrapper = shallow(
		<LikesCounter likes={likes} onLike={onLike} onDislike={onDislike} />
	);

	it('should define the main component', () => {
		wrapper.should.not.be.undefined;
	});

	it('should define the LikesNumber component', () => {
		wrapper.find(LikesNumberComponent).should.not.be.undefined;
	});

	it('should define the LikesIncrementer component', () => {
		wrapper.find(LikesIncrementerComponent).should.not.be.undefined;
	});

	it('should define the LikesDecrementer component', () => {
		wrapper.find(LikesDecrementerComponent).should.not.be.undefined;
	});
});
