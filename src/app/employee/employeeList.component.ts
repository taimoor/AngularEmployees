import {Component, OnInit} from '@angular/core';
import {IEmployee} from './employee';
import {EmployeeService} from './employee.service';


@Component({
	selector: 'list-employee',
	templateUrl: './employeeList.component.html',
	styleUrls: ['./employeeList.component.css'],
	providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit{
	employees: IEmployee[];

	selectedRadioButtonValue: string =  'All';

	constructor(private _employeeService: EmployeeService){
		
	}
	ngOnInit(){
		this._employeeService.getEmployees().subscribe((employeeData)=> this.employees = employeeData);
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
