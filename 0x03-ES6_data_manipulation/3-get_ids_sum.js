export default function getStudentIdsSum(lst) {
  // Use the reduce function to accumulate the sum of student IDs.
  return lst.reduce((counter, currentObj) => counter + currentObj.id, 0);
}
