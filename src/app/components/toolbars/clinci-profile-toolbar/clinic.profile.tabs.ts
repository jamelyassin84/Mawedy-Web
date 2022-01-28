export const clinicTabs: ClinicTabType[] = [
	{
		id: 1,
		name: 'Information',
		route: '/home/clinic-profile/',
	},
	{
		id: 2,
		name: 'Services',
		route: '/home/clinic-profile/services',
	},
]

export type ClinicTabType = {
	id: number
	name: string
	route: string
	icon?: string
}
