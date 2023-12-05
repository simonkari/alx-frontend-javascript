export default function getStudentsByLocation(lst, city) {
  // Use the filter function to select students whose
  //location matches the specified city.
  return lst.filter((obj) => obj.location === city);
}
