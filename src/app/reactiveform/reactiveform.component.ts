import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {

  // forms builder 
  constructor(private fb:FormBuilder) {}
  
  /*
contactForm = new FormGroup({
  firstname:new FormControl("souki",[Validators.required,Validators.minLength(5)]),
  lastname:new FormControl(),
  email:new FormControl(),
  password:new FormControl()
})
*/
contactForm = this.fb.group( {
  firstname:[ '',Validators.required],
  lastname:["",Validators.required],
  email:["" , Validators.required],
  password:["",Validators.required]
})

onsubmit(){
  console.log(this.contactForm.value)
}
get firstname(){
  return this.contactForm.get('firstname')

}
get lastname(){
  return this.contactForm.get('lastname')
}
get email(){
  return this.contactForm.get('email')
}
get password(){
  return this.contactForm.get('password')
}

}
