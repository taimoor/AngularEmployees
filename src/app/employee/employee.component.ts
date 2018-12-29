import {Component} from "@angular/core"

@Component({
	selector: 'employee-details',
	templateUrl: './employee.component.html'
})
export class EmployeeComponent{
	name: string = 'Taimoor';
	salary: number = 4000000;
}
