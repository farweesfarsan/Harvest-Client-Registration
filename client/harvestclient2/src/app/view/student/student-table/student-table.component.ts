import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {student} from "../../entity/student";

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit{
  students:student[] = [];

  constructor(private studentService :StudentService) {
  }



async  ngOnInit() {
     this.loadData();
  }

 async loadData(){
    this.students = await this.studentService.getAll();
  }
   async delete(student:student):Promise<void>{
     // console.log(student.id);
    await this.studentService.delete(student.id);
      this.loadData();
  }

}
