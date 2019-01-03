import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeListComponent} from './employee/employeeList.component';
import {EmployeeCountComponent} from './employee/employeeCount.component';
import {EmployeeTitlePipe} from './employee/employeeTitle.pipe';
import {HomeComponent} from './home/home.component';
import { PageNotFoundComponent } from './others/page-not-found.component';
import {EmployeeService} from './employee/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeCountComponent,
    EmployeeTitlePipe,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
