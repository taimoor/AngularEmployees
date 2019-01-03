import { Injectable} from "@angular/core";
import { IEmployee} from "./employee";

import { Http, Response } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class EmployeeService{
	constructor(private _http: Http){

	}
	getEmployees(): Observable<IEmployee[]>{
		return this._http.get('http://localhost:3000/api/employees.json')
						  	.map((response: Response) => <IEmployee[]> response.json())
						  	.catch(this.errorHandler)
	}

	getEmployeeByCode(employeeCode: String): Observable<IEmployee>{
		return this._http.get(`http://localhost:3000/api/employees/${employeeCode}.json`)
						  	.map((response: Response) => <IEmployee> response.json())
						  	.catch(this.errorHandler)
	}

	errorHandler(error: Response){
		console.error(error);
		return throwError(error);
	}
}
