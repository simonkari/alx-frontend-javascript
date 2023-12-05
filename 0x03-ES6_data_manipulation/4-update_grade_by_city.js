export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students in the specified city and update their grades based on newGrades.
  return students.filter((std) => std.location === city).map((std) => ({ ...std, grade: newGrades.filter((g) => g.studentId === std.id).map((g) => g.grade)[0] || 'N/A' }));
}
