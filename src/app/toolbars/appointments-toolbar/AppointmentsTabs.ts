export const AppointmentTabs: AppointmentTabType[] = [
	{
		name: 'Appointments',
		route: '/home/dashboard/appointments',
	},
	{
		name: 'Patient Outreach',
		route: '/home/dashboard/patient-outreach',
	},
]

export type AppointmentTabType = {
	name: string
	route: string
}
