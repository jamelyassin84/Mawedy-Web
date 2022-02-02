import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class DoctorService {
	constructor() {}

	private doctorCount = new BehaviorSubject<number>(0)

	setDoctorCount(value: number): void {
		this.doctorCount.next(value)
	}

	getDoctorCount(): Observable<number> {
		return this.doctorCount.asObservable()
	}
}
