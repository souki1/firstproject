import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 

  }
  apiurl = "https://jsonplaceholder.typicode.com/todos/"

  getApiData():Observable<any>{
    return this.http.get(this.apiurl);
  }
  obv = new Observable(data=>{
    setTimeout( ()=>{
      data.next("Hi this is observable")
    },1000)
    setTimeout( ()=>{
      data.next("Hi this is observable secound fucntion ")
    },5000)
  })
}
