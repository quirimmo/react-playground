'use strict';

import React from 'react';
import PerformancesBarChart from './PerformancesBarChart.component.jsx';

class PerformancesBarChartPage extends React.Component {
    constructor(props) {
        super(props);
        // lifting state brought data here, correct but we need to pass the callbacks too
        this.state = {
            chartData: [{
                values: [
                    { x: '1', y: 10 },
                    { x: '2', y: 4 },
                    { x: '3', y: 3 },
                    { x: '4', y: 3 },
                    { x: '5', y: 3 },
                    { x: '6', y: 3 },
                    { x: '7', y: 3 },
                    { x: '8', y: 3 },
                    { x: '9', y: 3 },
                    { x: '10', y: -3 }
                ]
            }]
        };
    }

    render() {
        return (
            <div>
                <br />
                <PerformancesBarChart data={this.state.chartData} />
            </div>
        );
    }
}

export default PerformancesBarChartPage;