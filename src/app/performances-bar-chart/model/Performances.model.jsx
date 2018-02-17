import statistics from '../../../../data/statistics.json';

class PerformancesModel {

	constructor() {
		this.totalDuration = +(statistics.duration / 1000).toFixed(2);
		this.scenarios = statistics.scenarios;
		this.scenarios.forEach(roundScenarioDuration.bind(this));
		this.steps = statistics.steps;
		this.steps.forEach(roundStepDuration.bind(this));

		function roundScenarioDuration(scenario) {
			scenario.duration = +(scenario.duration / 1000).toFixed(2);
		}

		function roundStepDuration(step) {
			step.duration = +(step.duration / 1000).toFixed(2);
		}
	}
	  
}

export default PerformancesModel;
