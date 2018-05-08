import { Student } from "./models/Student";
import { StudentService,IStudentService } from "./service/StudentService";

var studentService:IStudentService = new StudentService();

var student:Student = new Student();
student.setId(1);
student.setName("Akhilesh");
student.setStatus(true);
studentService.insert(student);

student = new Student();
student.setId(2);
student.setName("Ram");
student.setStatus(true);
studentService.insert(student);

studentService.getAll().forEach((s)=>{
    console.log("%d %s %d", s.getId(), s.getName(),s.getStatus());
});
