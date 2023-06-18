import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { Router, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"admin",component:AdminComponent}
]
@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class UserModule { }
