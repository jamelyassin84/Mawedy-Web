import {
	trigger,
	transition,
	animate,
	style,
	state,
	group,
} from '@angular/animations'

export const fadeIn = trigger('fadeIn', [
	state(
		'in',
		style({
			background: '1',
		}),
	),
	state(
		'out',
		style({
			opacity: '0',
		}),
	),
	transition('in => out', [
		group([
			animate(
				'1120ms linear',
				style({
					opacity: '1',
				}),
			),
			animate(
				'1130ms linear',
				style({
					opacity: '0',
				}),
			),
		]),
	]),
	transition('out => in', [
		group([
			animate(
				'1200ms linear',
				style({
					opacity: '0',
				}),
			),
			animate(
				'1300ms linear',
				style({
					opacity: '1',
				}),
			),
		]),
	]),
])
