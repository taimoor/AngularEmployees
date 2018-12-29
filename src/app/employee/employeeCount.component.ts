import { Component, Input, Output, EventEmitter } from "@angular/core"


@Component({
	selector: 'employee-count',
	templateUrl: './employeeCount.component.html',
	styleUrls: ['./employeeCount.component.css']
})

export class EmployeeCountComponent{
	@Input()
	all: number;

	@Input()
	female: number;

	@Input()
	male: number;

	selectedRadioButtonValue: string =  'All';

	@Output()
	employeeCountRadioChangeEvent: EventEmitter<string> = new EventEmitter<string>();

	onEmployeeCountRadioChange(){
		this.employeeCountRadioChangeEvent.emit(this.selectedRadioButtonValue);
		console.log(this.selectedRadioButtonValue);
	}

}
