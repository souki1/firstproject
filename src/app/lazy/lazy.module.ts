import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { Route, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"item",component:ItemComponent}
]
//step2

@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class LazyModule { }
