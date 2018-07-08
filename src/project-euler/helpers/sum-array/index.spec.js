import { expect } from 'chai';

import sumArray from './index.js';

describe('Helper: Sum Array', () => {
    describe('#sumArray', () => {
        it('should correctly sum an array', () => {
            expect(sumArray([5,10,15,20])).to.equal(50);
        });
    });
});
