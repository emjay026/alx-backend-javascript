function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  int8View[position] = value;

  return new DataView(buffer); // Modified to return DataView instead of Int8Array
}

export default createInt8TypedArray;
