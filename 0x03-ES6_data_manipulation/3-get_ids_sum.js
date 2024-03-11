const getStudentIdsSum = (students) =>
  students.reduce((previous, current) => previous + current.id, 0);

export default getStudentIdsSum;
