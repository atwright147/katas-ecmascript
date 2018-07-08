import { expect } from 'chai';

import fibonacci, { addLastTwo } from './index.js';

describe('Fibonacci sequence', () => {
    describe('#addLastTwo', () => {
        it('should add last two items from array', () => {
            expect(addLastTwo([0,1,2,3])).to.equal(5);
        });
    });

    describe('#fibonacci', () => {        
        it(`should return the first 32 numbers in the Fibonacci sequence`, () => {
            const expected = [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040,1346269];
            expect(fibonacci(32)).to.deep.equal(expected);
        });
    });
});
