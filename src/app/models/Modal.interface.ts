export interface Modal {
	type: ModalType
	header: any
	body: any
	footer: any
	value: boolean
}

export interface ConfirmModal {
	type: ModalType
	firstLine: string
	secondLine: string
	onCLose: Function
	onSubmit: Function
	value: boolean
}

type ModalType =
	| 'Center Large'
	| 'Center Medium'
	| 'Center Small'
	| 'Right'
	| 'Right Blur'
	| 'Confirm'
	| 'Loader'
	| 'File-Upload'
	| 'none'
