import { Injectable} from "@angular/core";
import { IEmployee} from "./employee";

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class EmployeeService{
	constructor(private _http: Http){

	}
	getEmployees(): Observable<IEmployee[]>{
		return this._http.get('http://localhost:3000/api/employees.json')
						  	.map((response: Response) => <IEmployee[]> response.json())
	}
}
