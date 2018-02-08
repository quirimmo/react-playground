import likesCounter from './likes-counter.reducer.jsx';

describe('likes counter reducer', () => {
    describe('LIKE', () => {
        it('should increment the state', () => {
            likesCounter(1, {type: 'LIKE'}).should.be.eql(2);
        });
    });

    describe('DISLIKE', () => {
        it('should decrement the state if greater than 0', () => {
            likesCounter(1, {type: 'DISLIKE'}).should.be.eql(0);
        });

        it('should not decrement the state if lower or equal than 0', () => {
            likesCounter(0, {type: 'DISLIKE'}).should.be.eql(0);
        });
    });
});