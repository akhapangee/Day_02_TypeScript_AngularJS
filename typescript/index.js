var studentModel =  require('./dist/models/Student');
var student = new studentModel.Student();
student.setId(1);
student.setName("Akhilesh Khapangee");
student.setStatus(false);

console.log(student);