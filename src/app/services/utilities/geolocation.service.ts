import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class GeoLocationService {
	constructor() {}

	public getPosition(): Observable<any> {
		return Observable.create((observer: any) => {
			navigator.geolocation.watchPosition((pos: any) => {
				observer.next(pos)
			}),
				() => {
					console.log('Position is not available')
				},
				{
					enableHighAccuracy: true,
				}
		})
	}
}
