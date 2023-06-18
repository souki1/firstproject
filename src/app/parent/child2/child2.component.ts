import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  @Input() value:any =""
  //passing value from child to parent 
  // 1st step
  @Output() parentcalling = new EventEmitter();

// variable passing 
  childvalue = "calling from child to parent "

  sendData(){
    this.parentcalling.emit(this.childvalue);
  }


}
