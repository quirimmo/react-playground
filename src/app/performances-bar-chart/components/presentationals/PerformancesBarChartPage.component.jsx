import React from 'react';
import PerformancesBarChart from './PerformancesBarChart.component.jsx';
import PerformancesModel from './../../model/Performances.model.jsx';

class PerformancesBarChartPage extends React.Component {
	constructor(props) {
		super(props);
		this.setupChartData();
		this._getScenariosTooltip = this._getScenariosTooltip.bind(this);
		this._getStepsTooltip = this._getStepsTooltip.bind(this);
	}

	setupChartData() {
		const performancesModel = new PerformancesModel();
		const scenariosValues = performancesModel.scenarios.map((scenario, index) => ({
			name: scenario.name,
			file: scenario.file,
			x: `${+(index + 1)}`,
			y: scenario.duration
		}));
		const stepsValues = performancesModel.steps.map((step, index) => ({
			name: step.name,
			x: `${+(index + 1)}`,
			y: step.duration
		}));
		this.chartData = {
			scenariosChartData: [{
				values: scenariosValues
			}],
			stepsChartData: [{
				values: stepsValues
			}]
		};
	}

	_getScenariosTooltip(x) {
		const currentScenario = this.chartData.scenariosChartData[0].values.find(scenario => scenario.x === x);
		return (
			<div className="wrapper-scenario-chart-tooltip">
				<h3>{currentScenario.name}</h3>
				<h4 className="single-scenario-file">{currentScenario.file}</h4>
				<h5 className="single-scenario-duration">{currentScenario.y.toString()}s</h5>
			</div>
		);
	}

	_getStepsTooltip(x) {
		const currentStep = this.chartData.stepsChartData[0].values.find(step => step.x === x);
		return (
			<div className="wrapper-scenario-chart-tooltip">
				<h3>{currentStep.name}</h3>
				<h5 className="single-scenario-duration">{currentStep.y.toString()}s</h5>
			</div>
		);
	}


	render() {
		return (
			<div>
				<PerformancesBarChart tooltip={this._getScenariosTooltip} data={this.chartData.scenariosChartData} />
				<PerformancesBarChart tooltip={this._getStepsTooltip} data={this.chartData.stepsChartData} />
			</div>
		);
	}
}

export default PerformancesBarChartPage;
