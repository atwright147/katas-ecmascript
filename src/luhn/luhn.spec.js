import { expect } from 'chai';

import luhnCheck from './luhn.js';

describe('#luhnCheck', () => {
    context('for valid numbers', () => {
        const scenarios = [
            '371449635398431',
            '30569309025904',
            '6011111111111117',
            '3530111333300000',
            '5555555555554444',
            '4111111111111111',
            '456565654',
            '4149685344157815',
            '4984421209470251',
            '49927398716',
            '1234567812345670',
        ];

        scenarios.forEach(scenario => {
            it(`should mark ${scenario} as valid`, () => {
                expect(luhnCheck(scenario)).to.equal(true);
            });
        });
    });

    context('for invalid numbers', () => {
        const scenarios = [
            '4444333322221110',
            '45085395454281489156',
            '49927398717',
            '1234567812345678',
        ];

        scenarios.forEach(scenario => {
            it(`should mark ${scenario} as invalid`, () => {
                expect(luhnCheck(scenario)).to.equal(false);
            });
        });
    });
});
