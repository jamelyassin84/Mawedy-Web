import { AlertService } from 'src/app/services/utilities/alert.service'
import { Injectable } from '@angular/core'
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpErrorResponse,
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { retry, catchError, tap, finalize } from 'rxjs/operators'
import { AlertMessage } from '../constants/Alert'

@Injectable()
export class MainInterceptor implements HttpInterceptor {
	constructor(public alert: AlertService) {}

	intercept<T>(
		request: HttpRequest<T>,
		next: HttpHandler,
	): Observable<HttpEvent<T>> {
		if (request.method === 'GET') {
		}
		return next.handle(request).pipe(
			retry(0),
			tap(() => {
				if (request.method !== 'GET') {
				}
			}),
			finalize(() => {}),
			catchError(this.errorMessage),
		)
	}

	errorMessage(response: HttpErrorResponse) {
		if (response.status == 404) {
			AlertMessage(
				'HTTP Error',
				`The requested URL was ${response.statusText}`,
				'error',
			)
		}
		if (response.status == 401) {
			AlertMessage(response.error.error, response.error.message, 'error')
		}
		if (response.status == 500) {
			AlertMessage(
				'HTTP Error',
				`Internal Server Error Contact Developers`,
				'error',
			)
		}
		for (let message in response.error.errors) {
			AlertMessage(
				`Error!`,
				JSON.stringify(response.error.errors[message]),
				'error',
			)
			break
		}
		return throwError(response)
	}
}
