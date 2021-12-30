export const AppointmentTabs: AppointmentTabType[] = [
	{
		id: 1,
		name: 'Appointments',
		route: '/home/dashboard/appointments',
	},
	{
		id: 2,
		name: 'Patient Outreach',
		route: '/home/dashboard/patient-outreach',
	},
]

export type AppointmentTabType = {
	id: number
	name: string
	route: string
}
