import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

value = 10
parentvalue=20;
// for child2 component
parentvalue1 = 15;

//step2
childvalue2 =0

receivedata(name:any){
  console.log(name);
  this.childvalue2 = name

}


}
