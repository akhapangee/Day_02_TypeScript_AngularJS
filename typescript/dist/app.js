"use strict";
exports.__esModule = true;
var Student_1 = require("./models/Student");
var StudentService_1 = require("./service/StudentService");
var studentService = new StudentService_1.StudentService();
var student = new Student_1.Student();
student.setId(1);
student.setName("Akhilesh");
student.setStatus(true);
studentService.insert(student);
student = new Student_1.Student();
student.setId(2);
student.setName("Ram");
student.setStatus(true);
studentService.insert(student);
studentService.getAll().forEach(function (s) {
    console.log("%d %s %d", s.getId(), s.getName(), s.getStatus());
});
