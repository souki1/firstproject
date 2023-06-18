import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chil1',
  templateUrl: './chil1.component.html',
  styleUrls: ['./chil1.component.css']
})
export class Chil1Component {
@Input () childvalue:any = ""

}
