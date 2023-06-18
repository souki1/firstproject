import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeApi } from './employeeapi';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmpapiService {


  constructor( private http:HttpClient,private route:ActivatedRoute) { }
  Apiurl="http://localhost:3000/"
  // get method
  getEmployee():Observable<EmployeeApi[]>{
    return this.http.get<EmployeeApi[]>(this.Apiurl+'employee')
  }
  //post method 
  postemployee(emp:EmployeeApi):Observable<any>{
    const headers = {'content-type':"application/json"}
    const body = JSON.stringify(emp)
    return this.http.post(this.Apiurl+'employee',body,{'headers':headers})
  }

}
//step2 