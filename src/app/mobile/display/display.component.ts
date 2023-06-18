import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileapiService } from 'src/app/mobileapi.service';
import { MobileComponent } from '../mobile.component';
import { Mobile } from 'src/app/mobile';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
id:any
display:any;
 mobile21:any ;

constructor(private route:Router,private activated:ActivatedRoute,private mobile:MobileapiService){
//console.log(this.mobile+"mobile")

this.id =  this.activated.snapshot.paramMap.get('id');

console.log(this.id)

// this.display =  this.mobile.mob.find(x=>x.id==this.id)
// console.log(this.display)


}
}
