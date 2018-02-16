import PerformancesModel from './Performances.model.jsx';

describe('PerformancesModel', () => {
    const pm = new PerformancesModel();

    it('should define the totalDuration', () => {
        pm.totalDuration.should.be.a('Number');
    });

    it('should define the scenarios', () => {
        pm.scenarios.should.be.an('Array');
    });

    it('should define the steps', () => {
        pm.steps.should.be.an('Array');
    });
});