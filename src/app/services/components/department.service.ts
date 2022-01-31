import { Observable, Subject } from 'rxjs'
import { Injectable } from '@angular/core'
import { Department } from 'src/app/models/types'

@Injectable({
	providedIn: 'root',
})
export class DepartmentService {
	constructor() {}

	private departments = new Subject<Department[]>()

	setDepartment(departments: Department[]) {
		this.departments.next(departments)
	}

	getDepartments(): Observable<Department[]> {
		return this.departments.asObservable()
	}
}
