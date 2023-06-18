import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  bool:boolean = true

  num = 110;
  buttonstyle = "white"
  button = "btn btn-danger"

  // array of objects 

  table = [
    {
      id:1,
      firstname:"girish",
      lastname:"kumar",
      marks:90
    },
    {
      id:2,
      firstname:"kishor",
      lastname:"kumar",
      marks:89
    },
    {
      id:3,
      firstname:"kumar",
      lastname:"water",
      marks:99
    }
  ]
  constructor(){}

}
