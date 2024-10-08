function cleanSet(inputSet, startString) {
  // Return an empty string if startString is empty
  if (!startString) {
    return '';
  }

  const ss = String(startString);

  const result = [];

  inputSet.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(ss)) {
      result.push(value.slice(startString.length)); // Append the rest of the string
    }
  });

  return result.length > 0 ? result.join('-') : '';
}

export default cleanSet;
