import Swal from 'sweetalert2'

export function Fire(
	title: string,
	text: string,
	type: 'warning' | 'error' | 'success' | 'info' | 'question',
	callback: Function,
) {
	Swal.fire({
		title: title,
		text: text,
		icon: type,
		showCancelButton: true,
		confirmButtonText: 'Yes',
		cancelButtonText: 'Cancel',
	}).then((result: any) => {
		if (result.value) {
			return callback()
		}
	})
}

export function AlertMessage(title: string, text: string, type: any) {
	Swal.fire(title, text, type)
}

export function ValidationError() {
	AlertMessage('Error', 'One or more fields should not be empty', 'error')
}

export function Created() {
	AlertMessage('Success', 'Data has been Successfully Created', 'success')
}

export function Updated() {
	AlertMessage('Success', 'Data has been Successfully Updated', 'success')
}

export function Deleted() {
	AlertMessage('Success', 'Data has been Successfully Deleted', 'success')
}

export function Welcome(name: String) {
	AlertMessage('Success', `Welcome Back! ${name}`, 'success')
}
