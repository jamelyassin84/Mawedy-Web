export interface Modal {
	type:
		| 'Center Large'
		| 'Center Medium'
		| 'Confirm'
		| 'File-Upload'
		| 'Loader'
		| 'Right Blur'
		| 'Right'
		| 'none'
	header: any
	body: any
	footer: any
	value: boolean
}

export interface ConfirmModal {
	type:
		| 'Center Large'
		| 'Center Medium'
		| 'Confirm'
		| 'File-Upload'
		| 'Loader'
		| 'Right Blur'
		| 'Right'
		| 'none'
	firstLine: string
	secondLine: string
	onCLose: Function
	onSubmit: Function
	value: boolean
}
