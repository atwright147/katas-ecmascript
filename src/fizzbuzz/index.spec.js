import { expect } from 'chai';

import fizzBuzz from './index.js';

describe('#fizzBuzz', () => {
    // #region testData
    const scenarios = [
        {
            number: 1,
            value: 1
        },
        {
            number: 2,
            value: 2
        },
        {
            number: 3,
            value: 'fizz'
        },
        {
            number: 4,
            value: 4
        },
        {
            number: 5,
            value: 'buzz'
        },
        {
            number: 6,
            value: 'fizz'
        },
        {
            number: 7,
            value: 7
        },
        {
            number: 8,
            value: 8
        },
        {
            number: 9,
            value: 'fizz'
        },
        {
            number: 10,
            value: 'buzz'
        },
        {
            number: 15,
            value: 'fizzbuzz'
        },
    ];
    // #endregion

    scenarios.forEach(scenario => {
        it(`should return ${scenario.value} for number ${scenario.number}`, () => {
            expect(fizzBuzz(scenario.number)).to.equal(scenario.value);
        });
    });
});
