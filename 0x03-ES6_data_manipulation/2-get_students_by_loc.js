export default function getStudentsByLocation(lst, city) {
  //select students whose location matches the specified city.
  return lst.filter((obj) => obj.location === city);
}
