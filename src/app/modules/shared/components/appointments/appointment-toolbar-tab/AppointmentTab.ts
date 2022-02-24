export const CalendarTabs: CalendarTabType[] = [
	{
		id: 1,
		name: 'Month',
		route: '/home/appointments/month',
	},
	{
		id: 2,
		name: 'Week',
		route: '/home/appointments/week',
	},
	{
		id: 3,
		name: 'Day',
		route: '/home/appointments/day',
	},
]

export type CalendarTabType = {
	id: number
	name: string
	route: string
}
