const Utils = {
    calculateNumber: function(type, a, b) {
        // Round both numbers
        const roundedA = Math.round(a);
        const roundedB = Math.round(b);

        // Perform the operation based on the type provided
        switch (type) {
            case 'SUM':
                return roundedA + roundedB; // Add the rounded numbers
            case 'SUBTRACT':
                return roundedA - roundedB; // Subtract b from a (rounded)
            case 'DIVIDE':
                if (roundedB === 0) {
                    return 'Error'; // Return 'Error' if the rounded value of b is 0
                }
                return roundedA / roundedB; // Divide a by b (rounded)
            default:
                return null; // Return null for unsupported operations
        }
    }
};
  
module.exports = Utils;
