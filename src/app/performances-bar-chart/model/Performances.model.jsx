import statistics from '../../../../data/statistics.json';

class PerformancesModel {

    constructor() {
        this.totalDuration = this.roundSeconds(statistics.duration / 1000);
        this.scenarios = statistics.scenarios;
        this.scenarios.forEach(roundScenarioDuration.bind(this));
        this.steps = statistics.steps;
        this.steps.forEach(roundStepDuration.bind(this));
        console.log(this);

        function roundScenarioDuration(scenario) {
            scenario.duration = this.roundSeconds(scenario.duration / 1000);
        }

        function roundStepDuration(step) {
            step.duration = this.roundSeconds(step.duration / 1000);
        }
    }

    roundSeconds(num) {
        return Math.round(num * 100) / 100;
    }

}

export default PerformancesModel = PerformancesModel;