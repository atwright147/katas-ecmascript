import { expect } from 'chai';

import getMultiples, { isMultipleOf } from './index.js';

describe('Get Multiples', () => {
    describe('#isMultipleOf', () => {
        it('should return true for multiples of 3', () => {
            expect(isMultipleOf([3], 6)).to.equal(true);
        });

        it('should return true for multiples of 5', () => {
            expect(isMultipleOf([5], 10)).to.equal(true);
        });

        it('should return true for multiples of 3 and 5', () => {
            expect(isMultipleOf([3, 5], 6)).to.equal(true);
            expect(isMultipleOf([3, 5], 10)).to.equal(true);
            expect(isMultipleOf([3, 5], 15)).to.equal(true);
        });

        it('should return false for non-multiples of 3 and 5', () => {
            expect(isMultipleOf([3, 5], 2)).to.equal(false);
            expect(isMultipleOf([3, 5], 4)).to.equal(false);
            expect(isMultipleOf([3, 5], 8)).to.equal(false);
        });
    });

    describe('#getMultiples', () => {
        it('should return multiples of 3 and 5 below 10', () => {
            const expected = [3,5,6,9,10];
            expect(getMultiples(10, [3,5])).to.deep.equal(expected);
        });
    });
});
