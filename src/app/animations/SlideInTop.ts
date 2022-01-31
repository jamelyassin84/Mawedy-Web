import {
	trigger,
	transition,
	animate,
	style,
	state,
	group,
} from '@angular/animations'

export const slideTop = trigger('slideTop', [
	state(
		'in',
		style({
			opacity: '1',
			transform: 'translateY(0%)',
		}),
	),
	state(
		'out',
		style({
			opacity: '0',
			transform: 'translateY(-100%)',
		}),
	),
	transition('in => out', [
		group([
			animate('350ms ease', style({})),
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
				'420ms linear',
				style({
					opacity: '0',
				}),
			),
			animate(
				'550ms ease',
				style({
					opacity: '1',
					transform: 'translateX(0%)',
				}),
			),
		]),
	]),
])
