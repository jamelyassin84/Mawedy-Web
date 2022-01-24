import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Inject, Injectable, Optional } from '@angular/core'
import { environment } from 'src/environments/environment'

@Injectable({
	providedIn: 'root',
})
export class BaseService {
	constructor(
		public http: HttpClient,
		@Inject('url') public url: String = '',
		@Inject('params') @Optional() public params: string | null = null,
	) {}

	headers() {
		let token = localStorage.getItem('token')
		let headers: any = {
			Accept: 'application/json',
			'Content-Type': [],
		}
		if (token !== null) {
			headers['Authorization'] + 'Bearer ' + token
		}
		return {
			headers: new HttpHeaders(headers),
		}
	}

	paginate(url: string) {
		return this.http.get<any>(url, this.headers())
	}

	index(overload: String = '') {
		const url = `${environment.api}${this.url}?${this.params}${overload}`
		return this.http.get<any>(url, this.headers())
	}

	show(id: Number) {
		const url = `${environment.api}${this.url}/${id}`
		return this.http.get<any>(url, this.headers())
	}

	create(data: Object) {
		const url = `${environment.api}${this.url}`
		return this.http.post<any>(url, data, this.headers())
	}

	update(id: Number, data: Object) {
		const url = `${environment.api}${this.url}/${id}`
		return this.http.patch<any>(url, data, this.headers())
	}

	destroy(id: Number) {
		const url = `${environment.api}${this.url}/${id}`
		return this.http.delete<any>(url, this.headers())
	}
}
