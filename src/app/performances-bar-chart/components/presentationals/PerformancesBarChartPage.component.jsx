'use strict';

import React from 'react';
import PerformancesBarChart from './PerformancesBarChart.component.jsx';
import PerformancesModel from './../../model/Performances.model.jsx';

class PerformancesBarChartPage extends React.Component {
    constructor(props) {
        super(props);

        let performancesModel = new PerformancesModel();
        const scenariosValues = performancesModel.scenarios.map((scenario, index) => ({
            name: scenario.name,
            file: scenario.file,
            x: +(index + 1) + '',
            y: scenario.duration
        }));
        this.state = {
            chartData: [{
                values: scenariosValues
            }]
        };

        this._getDefaultTooltip = this._getDefaultTooltip.bind(this);
    }

    render() {
        return (
            <div>
                <PerformancesBarChart tooltip={this._getDefaultTooltip} data={this.state.chartData} />
            </div>
        );
    }

    _getDefaultTooltip(x, y0, y, total) {
        const currentScenario = this.state.chartData[0].values.find((scenario) => scenario.x == x);
        return (
            <div className="wrapper-scenario-chart-tooltip">
                <h3>{currentScenario.name}</h3>
                <h4 class="single-scenario-file">{currentScenario.file}</h4>
                <h5 class="single-scenario-duration">{currentScenario.y.toString()}s</h5>
            </div>
        );
    }
}

export default PerformancesBarChartPage;