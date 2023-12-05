export default function createInt8TypedArray(length, position, value) {
  // Create an ArrayBuffer with the specified length.
  const buffer = new ArrayBuffer(length);

  // Create a DataView to manipulate the ArrayBuffer.
  const dv = new DataView(buffer);

  // Check if the specified position is outside the range of the created TypedArray.
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  // Set the new value at the desired position in the TypedArray.
  dv.setInt8(position, value);

  // Return the DataView of the ArrayBuffer.
  return dv;
}
