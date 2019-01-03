import {Component, OnInit} from '@angular/core';
import {IEmployee} from './employee';
import {EmployeeService} from './employee.service';


@Component({
	selector: 'list-employee',
	templateUrl: './employeeList.component.html',
	styleUrls: ['./employeeList.component.css']
})
export class EmployeeListComponent implements OnInit{
	employees: IEmployee[];

	selectedRadioButtonValue: string =  'All';
	statusMessage: string =  'Loading Data. Please wait...';

	constructor(private _employeeService: EmployeeService){
		
	}
	ngOnInit(){
		this._employeeService.getEmployees().subscribe((employeeData)=> this.employees = employeeData,
							(error) => {
								console.error(error);
								this.statusMessage = 'Some Error Occured on Server. Please try again later';
							});
	}

	trackByEmpCode(index: number, employee: any): string{
		return employee.code;
	}

	getEmployeeCount(gender: string= 'All'): number{
		if(gender==='All'){
			return this.employees.length;
		}else{
			return this.employees.filter(e => e.gender === gender).length;			
		}
	}

	employeeCountRadioChangeHandler(gender: string): void{
		this.selectedRadioButtonValue = gender;
	}

}
