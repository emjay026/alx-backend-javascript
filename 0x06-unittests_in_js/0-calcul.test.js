const assert = require('assert');
const { calculateNumber } = require('./0-calcul');

describe('calculateNumber', () => {
    it('should round numbers and return their sum', () => {
        assert.strictEqual(calculateNumber(2.3, 3.7), 6); // 2 + 4
    });

    it('should handle zero and negative values correctly', () => {
        assert.strictEqual(calculateNumber(0, 0), 0); // should be 0
        assert.strictEqual(calculateNumber(-0.5, -1.5), -1); // should be -1 instead of -2
        assert.strictEqual(calculateNumber(-3.7, 1.2), -3); // -4 + 1 = -3
        assert.strictEqual(calculateNumber(-1.8, 2.2), 0); // should be 0
    });

    it('should round to nearest integer correctly', () => {
        assert.strictEqual(calculateNumber(4.49, 4.51), 9); // 4 + 5
        assert.strictEqual(calculateNumber(2.5, 2.5), 6); // ROUND(2.5) = 3, ROUND(2.5) = 3 => 3 + 3 = 6 (rounding up)
        assert.strictEqual(calculateNumber(7.999, 1.001), 9); // 8 + 1
    });
});
