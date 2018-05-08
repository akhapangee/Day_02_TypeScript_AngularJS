"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.setId = function (id) {
        this.id = id;
    };
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setStatus = function (status) {
        this.status = status;
    };
    Student.prototype.getStatus = function () {
        return this.status;
    };
    return Student;
}());
exports.Student = Student;
