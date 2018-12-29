import { Injectable} from "@angular/core"
import { IEmployee} from "./employee"

@Injectable()
export class EmployeeService{

	getEmployees(): IEmployee[]{
		return [
			{ name: 'Taimoor', salary: 909000, gender: 'Male', designation: 'PSE', code: '101'},
	      	{ name: 'Afzal', salary: 209000, gender: 'Male', designation: 'PHP PSE', code: '120'},
	      	{ name: 'Sana', salary: 40000, gender: 'Female', designation: 'ASE', code: '33'},
	      	{ name: 'Warda', salary: 77090000, gender: 'Female', designation: 'PM', code: '890'},
	      	{ name: 'Shehroz', salary: 66000, gender: 'Male', designation: 'SE', code: '109'},
	      	{ name: 'Tina', salary: 68000, gender: 'Female', designation: 'SE', code: '109'},
	      	{ name: 'Robi', salary: 446000, gender: 'Female', designation: 'SE', code: '109'}
		]
	}
}