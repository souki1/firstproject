import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  constructor() { }
  student = "I am student component  "
  employee = "employee service api file "
  
  getstudentdeatils(){
    let studentvalue = "Hi this is student value"
    //console.log(studentvalue);
    return studentvalue;
  }
  //array of objects [ {},{} ]
  table = [
    {
      id:1,
      name:"girish",
      rollno:75,
      marks:80
    },
    {
      id:2,
      name:"kumar",
      rollno:10,
      marks:90
    },{
      id:3,
      name:"souki",
      rollno:1,
      marks:35
    }
]
}
