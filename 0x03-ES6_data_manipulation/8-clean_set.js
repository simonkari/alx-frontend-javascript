export default function cleanSet(set, startString) {
  let text = '';
  const array = [];

  // Check if startString is provided and is a valid string.
  if (startString && typeof startString === 'string') {
    for (const element of set) {
      if (element && element.startsWith(startString)) {
        array.push(element.slice(startString.length));
      }
    }
    text = array.join('-');
  }
  // Return the formatted text result.
  return text;
}
