import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class DropdownService {
	constructor() {}

	private isShowing = new BehaviorSubject<boolean>(false)

	setShowing(value: boolean) {
		this.isShowing.next(value)
	}

	getShowValue(): Observable<boolean> {
		return this.isShowing.asObservable()
	}
}
