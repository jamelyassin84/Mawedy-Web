const activePath = '../../../../assets/app/sidebar/active/'
const defaultPath = '../../../../assets/app/sidebar/default/'

export const SidebarNav: SidebarNavType[] = [
	{
		name: 'Dashboard',
		route: '/home/dashboard',
		icon: `${defaultPath}dashboard.png`,
		active: `${activePath}dashboard.png`,
	},
	{
		name: 'Appointments',
		route: `.png`,
		icon: `${defaultPath}appointments.png`,
		active: `${activePath}appointments.png`,
	},
	{
		name: 'Doctors Profile',
		route: `.png`,
		icon: `${defaultPath}doctor-profile.png`,
		active: `${activePath}doctors-profile.png`,
	},
	{
		name: 'Patients',
		route: `.png`,
		icon: `${defaultPath}patients.png`,
		active: `${activePath}patients.png`,
	},
	{
		name: 'Clinic Profile',
		route: `.png`,
		icon: `${defaultPath}clinic-profile.png`,
		active: `${activePath}clinic-profile.png`,
	},
	{
		name: 'Promotions',
		route: `.png`,
		icon: `${defaultPath}promotions.png`,
		active: `${activePath}promotions.png`,
	},
]

export type SidebarNavType = {
	name: string
	route: string
	icon: string
	active: string
}
