import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee/employeeList.component';
import {EmployeeComponent} from './employee/employee.component';
import {HomeComponent} from './home/home.component';
import { PageNotFoundComponent } from './others/page-not-found.component';

const routes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'employees', component: EmployeeListComponent},
	{path: 'employees/:code', component: EmployeeComponent},
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
