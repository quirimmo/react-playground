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
        this.state = {
            data: this.props.data,
            width: this.props.width || 1000,
            height: this.props.height || 600,
            barPadding: this.props.barPadding || 0.8,
            xLabel: this.props.xLabel || 'X',
            yLabel: this.props.yLabel || 'Y',
            tooltip: this.props.tooltip || this._getDefaultTooltip
        };
        this.onAddItem = this.onAddItem.bind(this);

        // PerformancesModel sample
        let performancesModel = new PerformancesModel();
    }

    onAddItem() {
        this.setState({
            data: [{
                values: this.state.data[0].values.concat({x: getNextItemValue.call(this), y: 5})
            }]
        });

        function getNextItemValue() {
            return '' + (parseInt(this.state.data[0].values[this.state.data[0].values.length - 1].x) + 1);
        }
    }

    render() {
        return (
            <div className="wrapper-performances-bar-chart">
                <button onClick={this.onAddItem}>Add item</button>
                <br/>
                <BarChart
                    data={this.state.data}
                    width={this.state.width}
                    height={this.state.height}
					barPadding={this.state.barPadding}
                    xAxis={{innerTickSize: 5, label: this.state.xLabel}}
                    yAxis={{innerTickSize: 5, label: this.state.yLabel}}
                    tooltipHtml={this.state.tooltip}
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