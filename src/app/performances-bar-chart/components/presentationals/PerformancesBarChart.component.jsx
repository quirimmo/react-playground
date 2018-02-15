'use strict';

import React from 'react';
import { BarChart } from 'react-d3-components';

import styles from './../../styles/style.scss';

import PerformancesModel from './../../model/Performances.model.jsx';

class PerformancesBarChart extends React.Component {

    constructor(props) {
        super(props);
        if(!props.data) {
            throw new Error('The data props of the PerformancesBarChart is missing');
        }

        // PerformancesModel sample
        let performancesModel = new PerformancesModel();
    }

    render() {
        const input = {
            data: this.props.data,
            width: this.props.width || 1000,
            height: this.props.height || 600,
            barPadding: this.props.barPadding || 0.8,
            xLabel: this.props.xLabel || 'X',
            yLabel: this.props.yLabel || 'Y',
            tooltip: this.props.tooltip || this._getDefaultTooltip
        };

        return (
            <div className="wrapper-performances-bar-chart">
                <button onClick={this.props.onAddItem}>Add item</button>
                <br/>
                <BarChart
                    data={input.data}
                    width={input.width}
                    height={input.height}
					barPadding={input.barPadding}
                    xAxis={{innerTickSize: 5, label: input.xLabel}}
                    yAxis={{innerTickSize: 5, label: input.yLabel}}
                    tooltipHtml={input.tooltip}
                    colorByLabel={false}
                    margin={{top: 10, bottom: 50, left: 50, right: 10}}
                />
            </div>
        );
    }

    _getDefaultTooltip(x, y0, y, total) {
        return <div><h1>{y.toString()}</h1></div>;
    }
}

export default PerformancesBarChart;