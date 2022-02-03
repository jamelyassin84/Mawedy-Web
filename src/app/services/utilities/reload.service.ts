import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class ReloadService {
	private reload = new BehaviorSubject<boolean>(false)
	private load = new BehaviorSubject<boolean>(false)

	willLoad(mode: boolean) {
		this.load.next(mode)
	}

	isLoading() {
		return this.load.asObservable()
	}

	willReload() {
		this.reload.next(true)
	}

	shouldReload() {
		return this.reload.asObservable()
	}
}
