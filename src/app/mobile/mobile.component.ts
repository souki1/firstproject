import { Component } from '@angular/core';
import { MobileapiService } from '../mobileapi.service';
import { Mobile } from '../mobile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {

  constructor(private mobileapi:MobileapiService,private route:Router){
    this.mobileapi.getMobile().subscribe(data=>{
      console.log(data);
      this.mobiles1 = data
    })
  }
  mobile2 = this.mobileapi;

  next1(id:any){
    console.log(id);
    this.route.navigateByUrl("mobile/"+id+"/display")
  }

    mobiles1!:Mobile[]
}
