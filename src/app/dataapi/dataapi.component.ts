import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ObservableComponent } from '../observable/observable.component';
import { Observable, count } from 'rxjs';
@Component({
  selector: 'app-dataapi',
  templateUrl: './dataapi.component.html',
  styleUrls: ['./dataapi.component.css']
})
export class DataapiComponent {

  constructor(private api:ApiService){

  }
  ngOnInit(){
    this.api.getApiData().subscribe( (data)=>{
      this.apidatavalue=data
    })
    this.api.obv.subscribe(result =>{
      this.value = result;
      console.log(result)
    })
  
  }
  value:any;
  apidatavalue:any;
 

}
