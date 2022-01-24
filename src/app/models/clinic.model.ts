import { SubscriptionType } from './subscription.type'
export interface ClinicDto {
	name: string
	address: string
	email: string
	phone: string
	subscriptionType?: SubscriptionType
	tradeLicenseNumber: string
	username: string
	avatar?: string | null | undefined
	areaCode?: number
	password?: string
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
	users: any[]
}
