// Function to add two numbers and round them to the nearest integer.
function calculateNumber(a, b) {
    // Round the numbers
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
    
    // Return the sum of the rounded numbers
    return roundedA + roundedB;
}

module.exports = { calculateNumber };
