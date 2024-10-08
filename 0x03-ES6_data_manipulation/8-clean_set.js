function cleanSet(inputSet, startString) {
  // if (!startString) { // Return an empty string if startString is empty
  //   return '';
  // }

  const result = [];
  inputSet.forEach((value) => {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length)); // Append the rest of the string
    }
  });

  return result.length > 0 ? result.join('-') : '';
}

export default cleanSet;
