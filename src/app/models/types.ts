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
	doctors: Doctor
	patients: Patient
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
	phones: any
	emails: any
	clinicDoctorWorkingSchedules: ClinicDoctorWorkingSchedule[]
}
export interface ClinicDoctorWorkingSchedule extends DateInterface {
	day: Day
	time?: string
	isActive: boolean
	clinic?: Clinic
	doctor?: Doctor
}
export interface Patient extends DateInterface {
	id?: number
	type: 'Walk-in' | 'App Patient'
	first: string
	middle: string
	last: string
	ext: string
	address: string
	sex: string
	religion: string
	dob: string
	city: string
	country: string
	age: string
	phones: { phone: string }[]
	emails: { email: string }[]
	avatars: { url: string }[]
}

export interface ClinicMedicalService extends DateInterface {
	id?: number
	name: string
	isActive: boolean
	description: string
	department: Department
	clinicDepartmentId?: Clinic
	images: any
}

export interface Appointment extends DateInterface {
	id?: number
	bookedThrough: 'app' | 'walk-in'
	appointment_type: 'app' | 'walk-in'
	date: string
	time: string
	comments: string | null
	status: 'pending' | 'canceled' | 'attended' | null
	booking_reference: string
	clinic: Clinic
	patient: Patient
	doctor: Doctor
	clinicPromotion: ClinicPromotion
	clinicMedicalService: ClinicMedicalService
	followUp: PatientBookingFollowUp
	patientBookingList: PatientBookingList
}

export interface ClinicPromotion extends DateInterface {
	id: number
	name: number
	startAt: string
	valid_until: Date
	highlights: string
	termsAndConditions: string
	discount: number
	isActive: boolean
	clinic: Clinic
}

export interface PatientBookingFollowUp extends DateInterface {
	id: number
	should_follow_up: boolean
	patientBookingList: PatientBookingList
	clinicAppointment: Appointment
}

export interface PatientBookingList extends DateInterface {
	id: number
	hasCanceled: boolean
	hasResult: boolean
	referenceNumber: number
	doctor: Doctor
	clinic: Clinic
	clinicAppointment: Appointment
}

export type Day = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'

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
	| 'Center Custom'
	| 'none'
