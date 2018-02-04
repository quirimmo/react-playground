'use strict';

import React from 'react';
import PerformancesBarChart from './../presentationals/PerformancesBarChart.component.jsx';

class PerformancesBarChartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: [{
                label: 'somethingA',
                values: [
                    { x: 'A', y: 10 },
                    { x: 'B', y: 4 },
                    { x: 'C', y: 3 },
                    { x: 'D', y: -3 }
                ]
            }]
        };
    }

    render() {
        return (
            <div>
                <PerformancesBarChart data={this.state.chartData} />
            </div>
        );
    }
}

export default PerformancesBarChartPage;