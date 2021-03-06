import {
	trigger,
	transition,
	animate,
	style,
	state,
	group,
} from '@angular/animations'

export const slideLeft = trigger('slideLeft', [
	state(
		'in',
		style({
			opacity: '1',
			transform: 'translateX(0%)',
		}),
	),
	state(
		'out',
		style({
			opacity: '0',
			transform: 'translateX(100%)',
		}),
	),
	transition('in => out', [
		group([
			animate(
				'420ms ease',
				style({
					transform: 'translateX(100%)',
				}),
			),
			animate(
				'350ms ease',
				style({
					opacity: '0',
				}),
			),
		]),
	]),
	transition('out => in', [
		group([
			animate(
				'100ms ease',
				style({
					opacity: '0',
				}),
			),
			animate(
				'200ms ease',
				style({
					opacity: '1',
					transform: 'translateX(0%)',
				}),
			),
		]),
	]),
])
