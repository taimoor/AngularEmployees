import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import {IEmployee} from './employee';
import {EmployeeService} from './employee.service';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/delay';

@Component({
	selector: 'employee-details',
	templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit{
	employee: IEmployee;
	statusMessage: string =  'Loading Data. Please wait...';
	subscription: Subscription;
	constructor(private _employeeService: EmployeeService, 
		private _activated_route: ActivatedRoute,
		private _router: Router)
	{

	}

	onBackButtonClick(): void{
		this._router.navigate(['/employees']);
	}

	onCancelButtonClick(): void{
		this.statusMessage = 'Request Cancelled';
		this.subscription.unsubscribe();
	}

	ngOnInit(){
		let employeeCode: string = this._activated_route.snapshot.params['code'];
		this.subscription = this._employeeService.getEmployeeByCode(employeeCode)
		.retryWhen((error)=> {
			return error.scan((retryCount)=>{
				retryCount +=1;
				if(retryCount<6){
					this.statusMessage = 'Retry Attempt # '+ retryCount;
					return retryCount;
				}else{
					throw(error);
				}
			},0).delay(1000)
		})		
		.subscribe(
			(employeeData) => {
				if(employeeData==null){
					this.statusMessage= `No Employee exsists with Code: ${employeeCode}`
				}else{
					this.employee= employeeData	
				}
				
			},
			(error) => {
				console.error(error);
				this.statusMessage = 'Some Error Occured on	 Server. Please try	 again	 later...';					
			}
		)
	}

}
