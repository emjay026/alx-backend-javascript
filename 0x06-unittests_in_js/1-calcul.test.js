// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    
    describe('SUM operation', () => {
        it('should return the sum of two rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 2.3, 3.7), 6); // 2 + 4
            assert.strictEqual(calculateNumber('SUM', 1.5, 2.5), 5); // 2 + 3
        });
    });

    describe('SUBTRACT operation', () => {
        it('should return the result of subtracting two rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 5.2, 2.8), 2); // 5 - 3
            assert.strictEqual(calculateNumber('SUBTRACT', 10.4, 4.6), 5); // 10 - 5
        });
    });

    describe('DIVIDE operation', () => {
        it('should return the quotient of two rounded numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 8.4, 2.0), 4); // 8 / 2 => 4
            assert.strictEqual(calculateNumber('DIVIDE', 6.8, 2.4), 3.5); // 7 / 2 => 3.5
            assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.0), 'Error'); // Division by zero
        });

        it('should handle cases with rounded values', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5.9, 2.1), 3); // Rounded: 6 / 2 => 3
            assert.strictEqual(calculateNumber('DIVIDE', 5.0, 2.0), 2.5); // 5 / 2 => 2.5
        });
    });

    describe('Invalid Operation', () => {
        it('should return null for unsupported operation types', () => {
            assert.strictEqual(calculateNumber('INVALID', 2.3, 3.5), null); // Unsupported operation
            assert.strictEqual(calculateNumber('', 2, 3), null); // Empty string as type
        });
    });
});
