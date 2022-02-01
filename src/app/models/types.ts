export interface Alert {
	title?: string
	description?: string
	callback?: Function | any
	type?: AlertType
	isShowing: boolean
}

export interface Clinic extends DateInterface {
	id: number
	name?: string
	email?: string
	phone?: string
	areaCode?: number
	username: string
	password?: string | null
	tradeLicenseNumber: string
	address: string | null
	description?: string | null
	longitude?: number | null
	latitude?: number | null
	instagram?: string | null
	google?: string | null
	facebook?: string | null
	apple?: string | null
	isApproved: boolean
	registeredVia?: 'web' | 'app'
	subscription?: string
	isActive?: boolean
	isLoggedIn?: boolean
	message: string | null
	isRead: boolean
	files: any
	users: any[]
	clinicAccounts: any
	phones: any
	photos: any
	devices: any
	clinicTimings: any
	avatar: any
}

export interface DateInterface {
	createdAt?: any
	updatedAT?: any
}

export interface FileInterface {
	base64: FileReader | FileReader[]
	files?: File[]
	file?: File
}

export interface Modal {
	type: ModalType
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

export interface marker {
	lat: number
	lng: number
	label?: string
}

export type AlertType = 'success' | 'info' | 'warning' | 'error'

export type SubscriptionType = 'trial' | 'solution' | 'app' | 'premium'

export type ModalType =
	| 'Center Large'
	| 'Center Medium'
	| 'Center Small'
	| 'Right'
	| 'Right Blur'
	| 'Confirm'
	| 'Loader'
	| 'File-Upload'
	| 'none'

export interface ClinicAccount extends DateInterface {
	id?: number | any
	name: string
	isActive?: boolean
	isLoggedIn?: boolean
	clinic: Clinic
}

export interface Department extends DateInterface {
	id?: number
	name: string
	isActive: boolean
}

export interface Doctor extends DateInterface {
	id?: number
	name: string
	title: string
	profession: string
	avatar: string
	specialties: string
	yearsOfExperience: number
	about: string
	isAvailable: boolean
	isActive: boolean
	clinicId: number
}

export interface ClinicDoctorWorkingSchedule extends DateInterface {
	day: Day
	time?: string
	isActive: boolean
	clinic?: Clinic
	doctor?: Doctor
}

export type Day = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'
