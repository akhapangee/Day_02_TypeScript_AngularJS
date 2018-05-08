"use strict";
exports.__esModule = true;
var StudentService = /** @class */ (function () {
    function StudentService() {
        this.students = new Array();
    }
    StudentService.prototype.getAll = function () {
        return this.students;
    };
    StudentService.prototype.insert = function (student) {
        this.students.push(student);
    };
    StudentService.prototype.getById = function (id) {
        for (var i = 0; i < this.students.length; i++) {
            var student = student[i];
            if (student.getId() == id) {
                return student;
            }
        }
        return null;
    };
    return StudentService;
}());
exports.StudentService = StudentService;
