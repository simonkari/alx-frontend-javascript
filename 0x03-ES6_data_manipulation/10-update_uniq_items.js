export default function updateUniqueItems(map) {
  // Check if the input is a Map.
  if (map instanceof Map) {
    // Iterate through each key-value pair in the Map.
    for (const [key, value] of map) {
      // Check if the value is 1 (indicating a unique item).
      if (value === 1) {
        // Update the value to a specific value (e.g., 100).
        map.set(key, 100);
      }
    }
  } else {
    // Throw an error if the input is not a Map.
    throw new Error('Cannot process. Input must be a Map.');
  }

  // Return the updated Map.
  return map;
}
