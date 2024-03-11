const getListStudentIds = (listStudents) => {
  let stdIds = [];
  if (!(listStudents instanceof Array)) {
    return stdIds;
  }
  stdIds = listStudents.map((std) => std.id);
  return stdIds;
};

export default getListStudentIds;
