export interface Modal {
	type: ModalType | undefined
	header: any
	body: any
	footer: any
	value: boolean
}

export interface ConfirmModal {
	type: ModalType | undefined
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
