import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  // data types 
  // number
  num1:number = 10;
  num2:number = 20;
  total:number = this.num1+this.num2;

  // string variable 

  str:string = "Hi this is girish working on angular"
  //Array
  //same data type array 
  // dynamic array 
  //object of array 

  //1) same data type array 

  arr:number [] = [10,20,30,40,50]

  strarray:string [] = ["girish","kumar","itvedant","angular"]

  // 2) dynamic array 

  dynamicarray:any [] = [10,20,30,"girish",true,"kumar",50]

  click:number = 0;
  buttonclicked(){
    this.click++;
    console.log("button clicked" ,this.click)
  }
  // fuction 
    danger(){
      this.click--;
      console.log("button --",this.click)
  }

  // boolean 

  value:boolean = true

  //input tag
  inputvalue:string = "Proprty binding" 

  // proprty classes

    buttoncolor:string="btn btn-danger"
    color:string="red"
    whitecolor:string = "white"


  /// two way binding varibale 


  twoway:any = "Angular"

  // twoway binding
  bindingvalues:any ="hi this is angular "+20+30



}
