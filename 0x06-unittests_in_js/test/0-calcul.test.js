const assert = require('assert');
const { calculateNumber } = require('./../0-calcul');

describe('calculateNumber', () => {
    
    it('round numbers and return their sum', () => {
        assert.equal(calculateNumber(2.3, 3.7), 6); // 2 + 4
        assert.equal(calculateNumber(1.5, 3.7), 6); // 2 + 4
        assert.equal(calculateNumber(1.2, 3.7), 5); // 1 + 4
        assert.equal(calculateNumber(1, 3.7), 5); // 1 + 4
        assert.equal(calculateNumber(1, 3), 4); // 1 + 3
    });

    it('handle zero and negative values correctly', () => {
        assert.equal(calculateNumber(0, 0), 0); // should be 0
        assert.equal(calculateNumber(-0.5, -1.5), -1); // should be -1 instead of -2
        assert.equal(calculateNumber(-3.7, 1.2), -3); // -4 + 1 = -3
        assert.equal(calculateNumber(-1.8, 2.2), 0); // should be 0
    });

    it('round to nearest integer correctly', () => {
        assert.equal(calculateNumber(4.49, 4.51), 9); // 4 + 5
        assert.equal(calculateNumber(2.5, 2.5), 6); // ROUND(2.5) = 3, ROUND(2.5) = 3 => 3 + 3 = 6 (rounding up)
        assert.equal(calculateNumber(7.999, 1.001), 9); // 8 + 1
    });
});
