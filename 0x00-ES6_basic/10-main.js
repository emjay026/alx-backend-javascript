export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const index = array.indexOf(value);
    // eslint-disable-next-line no-param-reassign
    array[index] = appendString + value;
  }

  return array;
}
