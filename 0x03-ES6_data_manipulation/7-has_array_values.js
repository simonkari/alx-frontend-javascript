export default function hasValuesFromArray(set, arr) {
  // Use the reduce function to check if all values from the array are present in the Set.
  return arr.reduce((prev, curr) => prev && set.has(curr), true);
}
