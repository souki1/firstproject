import { Component } from '@angular/core';
import { CollegeService } from '../college.service';
import { EmpapiService } from '../empapi.service';
import { EmployeeApi } from '../employeeapi';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
constructor(private empapi:EmpapiService){
  this.empapi.getEmployee().subscribe(data=>{
    console.log(data)
    this.empl = data
  })
  //step3
}

postemp(){
  this.empapi.postemployee(this.emp).subscribe(data=>{
    console.log(data)
  })
}
emp = new EmployeeApi()

value = false
showHide(){
this.value = true
}

empl!:EmployeeApi[] ;




}
