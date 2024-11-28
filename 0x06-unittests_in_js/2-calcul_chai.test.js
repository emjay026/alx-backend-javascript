const { expect } = require('chai'); //
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('SUM operation', () => {
        it('should return the sum of two rounded numbers', () => {
            expect(calculateNumber('SUM', 2.3, 3.7)).to.equal(6); // 2 + 4
            expect(calculateNumber('SUM', 1.5, 2.5)).to.equal(5); // 2 + 3
        });
    });

    describe('SUBTRACT operation', () => {
        it('should return the result of subtracting two rounded numbers', () => {
            expect(calculateNumber('SUBTRACT', 5.2, 2.8)).to.equal(2); // 5 - 3
            expect(calculateNumber('SUBTRACT', 10.4, 4.6)).to.equal(5); // 10 - 5
        });
    });

    describe('DIVIDE operation', () => {
        it('should return the quotient of two rounded numbers', () => {
            expect(calculateNumber('DIVIDE', 8.4, 2.0)).to.equal(4); // 8 / 2 => 4
            expect(calculateNumber('DIVIDE', 6.8, 2.4)).to.equal(3.5); // 7 / 2 => 3.5
            expect(calculateNumber('DIVIDE', 5.0, 0.0)).to.equal('Error'); // Division by zero
        });

        it('should handle cases with rounded values', () => {
            expect(calculateNumber('DIVIDE', 5.9, 2.1)).to.equal(3); // Rounded: 6 / 2 => 3
            expect(calculateNumber('DIVIDE', 5.0, 2.0)).to.equal(2.5); // 5 / 2 => 2.5
        });
    });

    describe('Invalid Operation', () => {
        it('should return null for unsupported operation types', () => {
            expect(calculateNumber('INVALID', 2.3, 3.5)).to.be.null; // Unsupported operation
            expect(calculateNumber('', 2, 3)).to.be.null; // Empty string as type
        });
    });
});
