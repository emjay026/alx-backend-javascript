function cleanSet(mySet, startString) {
  const result = [...mySet]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
  return result;
}

export default cleanSet;
