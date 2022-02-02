export const clinicTabs: ClinicTabType[] = [
	{
		id: 1,
		name: 'Services',
		route: '/home/clinic-profile/services',
		icon: 'activity',
	},
	{
		id: 2,
		name: 'Information',
		route: '/home/clinic-profile/information',
		icon: 'info',
	},

	{
		id: 3,
		name: 'Summary',
		route: '/home/clinic-profile/services',
		icon: 'clipboard',
	},
]

export type ClinicTabType = {
	id: number
	name: string
	route: string
	icon: string
}
