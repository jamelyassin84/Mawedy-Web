export const AppointmentTabs: AppointmentTabType[] = [
	{
		id: 1,
		name: 'Appointments',
		route: '/home/dashboard/appointments',
		icon: 'clock',
	},
	{
		id: 2,
		name: 'Patient Outreach',
		route: '/home/dashboard/patient-outreach',
		icon: 'users',
	},
]

export type AppointmentTabType = {
	id: number
	name: string
	route: string
	icon: string
}
