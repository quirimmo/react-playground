import { connect } from 'react-redux';

import PerformancesBarChartPage from './../presentationals/PerformancesBarChartPage.component.jsx';

export const mapStateToProps = (state, ownProps) => {
  	return {
		chartData: state.chartData
  	};
};

export const mapDispatchToProps = (dispatch, ownProps) => {
	return {
  	};
};

const PerformancesBarChartPageContainer = connect(
	mapStateToProps,
  	mapDispatchToProps
)(PerformancesBarChartPage);

// export default PerformancesBarChartPageContainer;
export default PerformancesBarChartPage;