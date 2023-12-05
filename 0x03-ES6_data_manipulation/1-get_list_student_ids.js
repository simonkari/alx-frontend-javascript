export default function getListStudentIds(lst) {
  // Check if the input is an array.
  if (Array.isArray(lst)) {
    // Use the map function to extract the 'id' property from each student object.
    return lst.map((obj) => obj.id);
  }

  // Return an empty array if the input is not an array.
  return [];
}
