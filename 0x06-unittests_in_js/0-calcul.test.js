const assert = require('assert');
const { calculateNumber } = require('./0-calcul');

describe('calculateNumber', () => {
    it('should round numbers and return their sum', () => {
        assert.equal(calculateNumber(2.3, 3.7), 6); // 2 + 4
        assert.equal(calculateNumber(-1.8, 2.2), 1); // -2 + 2
        assert.equal(calculateNumber(0.5, 0.5), 1); // 1 + 0
        assert.equal(calculateNumber(10.4, 10.5), 21); // 10 + 11
        assert.equal(calculateNumber(5.5, 5.5), 11); // 6 + 5
    });

    it('should handle zero and negative values correctly', () => {
        assert.equal(calculateNumber(0, 0), 0); // 0 + 0
        assert.equal(calculateNumber(-0.5, -1.5), -2); // 0 + -2
        assert.equal(calculateNumber(-3.7, 1.2), -2); // -4 + 1
    });

    it('should round to nearest integer correctly', () => {
        assert.equal(calculateNumber(4.49, 4.51), 9); // 4 + 5
        assert.equal(calculateNumber(2.5, 2.5), 5); // 3 + 2
        assert.equal(calculateNumber(7.999, 1.001), 9); // 8 + 1
    });
});
