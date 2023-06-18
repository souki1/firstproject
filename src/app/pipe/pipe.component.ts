import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  str:string = "girish"
  // to create an object you  need new key word 
  date = new Date();

  num1:number = 5;

  num2:number=0;

  strpipe:string=""


  numpipe:number = 1;

}
