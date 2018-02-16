import visibilityFilter from './visibility-filter.reducer.jsx';

describe('visibilityFilter reducer', () => {
    describe('SET_VISIBILITY_FILTER', () => {
        it('should return SHOW_ALL by default if no valid action has been passed', () => {
            const action = { type: 'NOT_VALID_ACTION' };
            visibilityFilter(undefined, action).should.be.eql('SHOW_ALL');
        });

        it('should return the passed filter property if the action is SET_VISIBILITY_FILTER', () => {
            const action = { type: 'SET_VISIBILITY_FILTER', filter: 'default-filter' };
            visibilityFilter(undefined, action).should.be.eql('default-filter');
        });
    });
});