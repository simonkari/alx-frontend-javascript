export default function cleanSet(set, startString) {
  let text = '';
  const array = [];

  // Check if startString is provided and is a valid string.
  if (startString && typeof startString === 'string') {
    // Iterate through each element in the Set.
    for (const element of set) {
      // Check if the element starts with the specified startString.
      if (element && element.startsWith(startString)) {
        // Push the cleaned element (without startString) into the array.
        array.push(element.slice(startString.length));
      }
    }
     // Join the cleaned elements using '-' as a separator to form the final text result.
    text = array.join('-');
  }
  // Return the formatted text result.
  return text;
}
