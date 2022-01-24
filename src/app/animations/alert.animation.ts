    import {
	trigger,
	style,
	animate,
	transition,
	stagger,
	query,
} from '@angular/animations'

const contentOpen = {
	transform: 'translateY(-10%)',
	opacity: 1,
}

const contentClose = {
	transform: 'translateX(-150%)',
	opacity: 0.5,
}

export const alertAnimation = trigger('alert', [
	transition('* <=> *', [
		query(':enter', [animate('.4s ease-out', style(contentOpen))], {
			optional: true,
		}),
		query(':leave', animate('.2s', style(contentClose)), {
			optional: true,
		}),
	]),
])
