function cleanSet(set, startString) {
  // If the startString is empty, return an empty string
  if (startString === '') {
    return '';
  }

  // Create an array to collect matching strings
  const result = [];

  // Iterate through the set
  for (const item of set) {
    // Check if the item starts with the specified startString
    if (item.startsWith(startString)) {
      // Append the rest of the string (excluding the starting part)
      result.push(item.slice(startString.length));
    }
  }

  // Return the joined string separated by '-'
  return result.join('-');
}

export default cleanSet;
