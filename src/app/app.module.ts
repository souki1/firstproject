import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeComponent } from './pipe/pipe.component';
import { StatementPipe } from './statement.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
import { ParentComponent } from './parent/parent.component';
import { Chil1Component } from './parent/chil1/chil1.component';
import { Child2Component } from './parent/child2/child2.component';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { DataapiComponent } from './dataapi/dataapi.component';
import { ObservableComponent } from './observable/observable.component';
import { NestedfirstComponent } from './nestedfirst/nestedfirst.component';
import { Page1Component } from './nestedfirst/page1/page1.component';
import { Page2Component } from './nestedfirst/page2/page2.component';
import { ErrorComponent } from './error/error.component';
import { MobileComponent } from './mobile/mobile.component';
import { DisplayComponent } from './mobile/display/display.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { LazyModule } from './lazy/lazy.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    PipeComponent,
    StatementPipe,
    DirectivesComponent,
    CustomDirectiveDirective,
    ParentComponent,
    Chil1Component,
    Child2Component,
    StudentComponent,
    EmployeeComponent,
    DataapiComponent,
    ObservableComponent,
    NestedfirstComponent,
    Page1Component,
    Page2Component,
    ErrorComponent,
    MobileComponent,
    DisplayComponent,
    TemplatedrivenComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //step1
    LazyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
