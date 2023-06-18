import { Component } from '@angular/core';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
constructor( college:CollegeService){
  this.studentid = college.student;
 // console.log(college.studentdeatils())
  this.studentvalues = college.getstudentdeatils();
  console.log(this.studentvalues)
  this.studenttable=college.table
  console.log(this.studenttable)
}





studenttable:any=""
studentid:any
studentvalues:any  =[]
}
