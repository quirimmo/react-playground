import { like, dislike } from './likes-counter.action.jsx';

describe('likes counter actions', () => {
    describe('like', () => {
        it('should return an acion object of type LIKE', () => {
            like().should.be.eql({
                type: 'LIKE'
            });
        });
    });

    describe('dislike', () => {
        it('should return an acion object of type DISLIKE', () => {
            dislike().should.be.eql({
                type: 'DISLIKE'
            });
        });
    });
});