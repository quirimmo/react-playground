import React from 'react';
import { BarChart } from 'react-d3-components';
import PerformancesBarChart from './PerformancesBarChart.component.jsx';

describe('PerformancesBarChart', () => {
	const data = [
		{
			values: [
				{
					x: 1,
					y: 2
				},
				{
					x: 2,
					y: 4
				}
			]
		}
	];
	const wrapper = shallow(<PerformancesBarChart data={data} />);

	describe('general', () => {
		it('should define the main component', () => {
			wrapper.should.not.be.undefined;
		});
	});

	describe('methods', () => {
		describe('_getDefaultTooltip', () => {
			it('should be a function', () => {
				wrapper.instance()._getDefaultTooltip.should.be.a('Function');
			});

			it('should return the right HTML', () => {
				wrapper
					.instance()
					._getDefaultTooltip(null, null, 'Hello World', null)
					.should.be.eql(
						<div>
							<h1>Hello World</h1>
						</div>
					);
			});
		});
	});

	describe('HTML', () => {
		describe('container', () => {
			it('should has the right class name', () => {
				wrapper.find('div').hasClass('wrapper-performances-bar-chart')
					.should.be.true;
			});
		});

		describe('BarChart', () => {
			it('should be defined', () => {
				wrapper.find(BarChart).should.not.be.null;
			});

			it('should pass the data as props of the component', () => {
				wrapper
					.find(BarChart)
					.props()
					.data.should.be.eql(data);
			});
		});
	});
});
