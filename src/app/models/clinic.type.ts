import { DateInterface } from './date.type'
export interface ClinicDto extends DateInterface {
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

	isActive?: boolean

	isLoggedIn?: boolean

	message: string | null

	isRead: boolean

	files: any

	users: any[]

	clinicAccounts: any

	phones: any
	photos?: any
	devices: any
	clinicTimings: any
}
