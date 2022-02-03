import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class CurrentDepartmentService {
	constructor() {}

	private department = new Subject<number>()

	setDepartment(id: number) {
		this.department.next(id)
	}

	getDepartment() {
		return this.department.asObservable()
	}
}
