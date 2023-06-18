import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { PipeComponent } from './pipe/pipe.component';
import { NestedfirstComponent } from './nestedfirst/nestedfirst.component';
import { Page1Component } from './nestedfirst/page1/page1.component';
import { Page2Component } from './nestedfirst/page2/page2.component';
import { ErrorComponent } from './error/error.component';
import { MobileComponent } from './mobile/mobile.component';
import { DisplayComponent } from './mobile/display/display.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"pipe",pathMatch:"full"},
  {path:"employee",component:EmployeeComponent},
  {path:"pipe",component:PipeComponent},
  {path:"mobile",component:MobileComponent},
  {path:"reactiveform",component:ReactiveformComponent},
  {path:"template",component:TemplatedrivenComponent},
  // display by id 
  {path:"mobile/:id/display",component:DisplayComponent},
 
 //step3
  // routing for lazy loading  
  {path :"lazyloading",
  loadChildren: ()=> import('../app/lazy/lazy.module').then(m=>m.LazyModule)},

  {
    path:"user",
    loadChildren:()=> import('./user/user.module').then(m=>m.UserModule)
  },
  // for nested component
  {
    path:"nestedfirst", 
    children:[
      {path:"",component:NestedfirstComponent},
      {path:"page1",component:Page1Component},
      {path:"page2",component:Page2Component}
    ]
  
  },
  //error component 
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
