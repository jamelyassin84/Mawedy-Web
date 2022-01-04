export type AlertType = 'success' | 'info' | 'warning' | 'error'

export type Alert = {
	title?: string
	description?: string
	callback?: Function | any
	type?: AlertType
	isShowing: boolean
}
