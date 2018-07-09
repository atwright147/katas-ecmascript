import { expect } from 'chai';

import get, { isEven } from './index.js';

describe('Helper: Get', () => {
    describe('#isEven', () => {
        it('should return true for an even number', () => {
            expect(isEven(6)).to.equal(true);
        });
    });

    describe('#get', () => {
        describe('odd or even', () => {
            it('should return even numbered items', () => {
                expect(get('even', [1,2,3,4,5,6])).to.deep.equal([2,4,6]);
            });

            it('should return odd numbered items', () => {
                expect(get('odd', [1,2,3,4,5,6])).to.deep.equal([1,3,5]);
            });
        });
    });
});
