const getStudentIdsSum = (students) => students.reduce((prVal, cur) => prVal + cur.id, 0);

export default getStudentIdsSum;
