import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //data types 

  //number 
  num:number = 10;
  num2:number = 20;
  total:number = this.num+this.num2


  // string

  str:string ="Girish "

  constructor(){
    console.log(this.str);
    console.log(this.num);
    console.log("This is total ",this.total)
  }


}
