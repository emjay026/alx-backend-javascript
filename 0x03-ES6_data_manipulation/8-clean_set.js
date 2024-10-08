function cleanSet(inputSet, startString) {
  // Return an empty string if startString is empty
  if (!startString
    || startString.trim().length === 0
    || typeof startString !== 'string'
    || !Array.isArray(inputSet)) {
    return '';
  }

  const result = [];

  inputSet.forEach((value) => {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length)); // Append the rest of the string
    }
  });

  return result.length > 0 ? result.join('-') : '';
}

export default cleanSet;
