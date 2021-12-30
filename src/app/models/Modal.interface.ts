export interface Modal {
	type:
		| 'Center Large'
		| 'Center Medium'
		| 'Confirm'
		| 'File-Upload'
		| 'Loader'
		| 'Right Blur'
		| 'Right'
	header: any
	body: any
	footer: any
	value: boolean
}

export interface ConfirmModal {
	firstLine: string
	secondLine: string
	onCLose: Function
	onSubmit: Function
	value: boolean
}
