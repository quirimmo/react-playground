import React from 'react';
import PerformancesBarChart from './PerformancesBarChart.component.jsx';
import PerformancesModel from './../../model/Performances.model.jsx';
import PerformancesBarChartPage from './PerformancesBarChartPage.component.jsx';

describe.only('PerformancesBarChartPage', () => {
    const wrapper = shallow(<PerformancesBarChartPage />);

    describe('general', () => {
        it('should define the main component', () => {
            wrapper.should.not.be.undefined;
        });
    });

    describe('methods', () => {
        describe('setupChartData', () => {
            it('should be a function', () => {
                wrapper.instance().setupChartData.should.be.a('Function');
            });

            it('should instantiate the PerformancesModel', () => {
                PerformancesModel.constructor = spy();
                wrapper.instance().setupChartData();
                PerformancesModel.constructor.should.have.been.called();
                // wrapper.instance().setupChartData.should.be.a('Function');
            });

            // it('should return the right HTML', () => {
            //     wrapper.instance()._getDefaultTooltip(null, null, 'Hello World', null).should.be.eql(
            //         <div>
            //             <h1>Hello World</h1>
            //         </div>
            //     );
            // });
        });
    });

    // describe('HTML', () => {
    //     describe('container', () => {
    //         it('should has the right class name', () => {
    //             wrapper.find('div').hasClass('wrapper-performances-bar-chart').should.be.true;
    //         });
    //     });

    //     describe('BarChart', () => {
    //         it('should be defined', () => {
    //             wrapper.find(BarChart).should.not.be.null;
    //         });

    //         it('should pass the data as props of the component', () => {
    //             wrapper.find(BarChart).props().data.should.be.eql(data);
    //         });
    //     });
    // });
});