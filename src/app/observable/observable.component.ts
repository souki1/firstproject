import { Component } from '@angular/core';
import { Observable, count } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  //promises
 prom =  new Promise(resolve => {
   setTimeout(() => {
     resolve("Hi this is promise ");
   }, 3000); 
   setTimeout(() => {
    resolve("Hi this is promise secound function ");
  }, 1000); 
 })
 value:any;

//observable
obvalue:any;

obv = new Observable(data=>{
  setTimeout( ()=>{
    data.next("Hi this is observable")
  },1000)
  setTimeout( ()=>{
    data.next("Hi this is observable secound fucntion ")
  },5000)
})

///observable 
valueobv1:any;

obv1 = new Observable(data=>{
  console.log("Hi this is observable1 ")
  let counter =0;
  setTimeout( ()=>{
    data.next(1)
    data.next(2)
    data.next(3)
  },1000)
  setTimeout( ()=>{
    data.next("hi")
    data.next(2)
    data.next(3)
    data.complete()
  },3000)

})

//// promises
prom1value:any;
prom1 = new Promise (data=>{
  console.log("hi this is prom1 imple")
  let counter =0;
  setInterval( ()=>{
    counter =counter+1;
    data("Hi this is prom1 value")
  },1000)
})





}
