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
				'120ms linear',
				style({
					transform: 'translateX(100%)',
				}),
			),
			animate(
				'130ms linear',
				style({
					opacity: '0',
				}),
			),
		]),
	]),
	transition('out => in', [
		group([
			animate(
				'200ms linear',
				style({
					opacity: '0',
				}),
			),
			animate(
				'300ms linear',
				style({
					opacity: '1',
					transform: 'translateX(0%)',
				}),
			),
		]),
	]),
])
