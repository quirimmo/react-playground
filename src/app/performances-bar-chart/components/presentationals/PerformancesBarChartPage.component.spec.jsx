import React from 'react';
import PerformancesBarChart from './PerformancesBarChart.component.jsx';
import PerformancesModel from './../../model/Performances.model.jsx';
import PerformancesBarChartPage from './PerformancesBarChartPage.component.jsx';

describe('PerformancesBarChartPage', () => {
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

            it('should define the chartData property', () => {
                wrapper.instance().chartData.should.be.an('Object');
                wrapper.instance().chartData.scenariosChartData.should.be.an('Array');
                wrapper.instance().chartData.stepsChartData.should.be.an('Array');
            });
        });

        describe('_getScenariosTooltip', () => {
            it('should be a function', () => {
                wrapper.instance()._getScenariosTooltip.should.be.a('Function');
            });

            describe('HTML', () => {
                const scenarioTooltipLayout = shallow(wrapper.instance()._getScenariosTooltip(1, null, null, 'Hello World', null));

                describe('container', () => {
                    it('should present the class name', () => {
                        scenarioTooltipLayout.find('div').hasClass('wrapper-scenario-chart-tooltip').should.be.true;
                    });
                });

                describe('title', () => {
                    it('should be present', () => {
                        scenarioTooltipLayout.find('h3').should.not.be.null;
                    });
                });

                describe('subtitle', () => {
                    it('should be present', () => {
                        scenarioTooltipLayout.find('h4').should.not.be.null;
                    });

                    it('should present the class name', () => {
                        scenarioTooltipLayout.find('h4').hasClass('single-scenario-file').should.be.true;
                    });
                });

                describe('duration', () => {
                    it('should be present', () => {
                        scenarioTooltipLayout.find('h5').should.not.be.null;
                    });

                    it('should present the class name', () => {
                        scenarioTooltipLayout.find('h5').hasClass('single-scenario-duration').should.be.true;
                    });
                });
            });
        });

        describe('_getStepsTooltip', () => {
            it('should be a function', () => {
                wrapper.instance()._getStepsTooltip.should.be.a('Function');
            });

            describe('HTML', () => {
                const stepTooltipLayout = shallow(wrapper.instance()._getStepsTooltip(1, null, null, 'Hello World', null));

                describe('container', () => {
                    it('should present the class name', () => {
                        stepTooltipLayout.find('div').hasClass('wrapper-scenario-chart-tooltip').should.be.true;
                    });
                });

                describe('title', () => {
                    it('should be present', () => {
                        stepTooltipLayout.find('h3').should.not.be.null;
                    });
                });

                describe('duration', () => {
                    it('should be present', () => {
                        stepTooltipLayout.find('h5').should.not.be.null;
                    });

                    it('should present the class name', () => {
                        stepTooltipLayout.find('h5').hasClass('single-scenario-duration').should.be.true;
                    });
                });
            });
        });
    });

    describe('HTML', () => {
        describe('PerformancesBarChart', () => {
            it('should instantiate two PerformancesBarChart', () => {
                wrapper.find(PerformancesBarChart).length.should.be.eql(2);
            });
        });
    });
});