export const clinicTabs: ClinicTabType[] = [
	{
		id: 1,
		name: 'Information',
		route: '/home/clinic-profile/',
		icon: 'info',
	},
	{
		id: 2,
		name: 'Services',
		route: '/home/clinic-profile/services',
		icon: 'activity',
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
