function cleanSet(inputSet, startString) {
  // Check if inputSet is an array
  if (!Array.isArray(inputSet)) {
    throw new TypeError('inputSet must be an array');
  }

  // Check if startString is a string
  if (typeof startString !== 'string') {
    throw new TypeError('startString must be a string');
  }

  // Return an empty string if startString is empty
  if (!startString) {
    return '';
  }

  const result = [];

  inputSet.forEach((value) => {
    // Check if value is a string
    if (typeof value === 'string' && value.startsWith(startString)) {
      result.push(value.slice(startString.length)); // Append the rest of the string
    }
  });

  return result.length > 0 ? result.join('-') : '';
}

export default cleanSet;
