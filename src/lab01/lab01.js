console.log("lab01")

let fullname = "Nguyen Van A";

let birthYear = 2005;

let isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();

let calculatedAge = currentYear - birthYear;

const info = `Tên : ${fullname}
Tuổi : ${calculatedAge}
Sinh viên : ${isStudent}`;

console.log(info);