'use strict';

import React from 'react';
import PerformancesBarChart from './PerformancesBarChart.component.jsx';

class PerformancesBarChartPage extends React.Component {
    constructor(props) {
        super(props);
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
        this.onAddItem = this.onAddItem.bind(this);
    }

    onAddItem() {
        this.setState({
            chartData: this.state.chartData[0].values.concat({x: '11', y: 5})
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.onAddItem}>Add item</button>
                <br />
                <PerformancesBarChart data={this.state.chartData} />
            </div>
        );
    }
}

export default PerformancesBarChartPage;