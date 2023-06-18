import { Component } from '@angular/core';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent {

  contact:any = {
  }
  firstname:any
  onsubmit(val:any){
    console.log(val.value)
  }
}
