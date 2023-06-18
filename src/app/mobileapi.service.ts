import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mobile } from './mobile';

@Injectable({
  providedIn: 'root'
})
export class MobileapiService {

  constructor( private http:HttpClient) { }
  Apiurl = "http://localhost:3000/"
 
  // get method
  getMobile():Observable<Mobile[]>{
    console.log(Mobile)
    return this.http.get<Mobile[]>(this.Apiurl+"mobile");
  }
  // objects of array 
  mobile= [
    {
        "id":"1",
        "mobilename":"iphone",
        "model":"X",
        "year":2013
    },
    {
        "id":2,
        "mobilename":"Realme",
        "model":"Gt",
        "year":2021
    }
  ]
  laptop = [
    {
      id:1,
      laptopname:"Dell",
      laptopmodel :"i7",
      laptopyear:2021
    },
    {
      id:2,
      laptopname:"Dell",
      laptopmodel :"i7",
      laptopyear:2021
    }
  ]




}
