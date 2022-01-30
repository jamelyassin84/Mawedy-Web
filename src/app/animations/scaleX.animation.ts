import {
	trigger,
	transition,
	animate,
	style,
	state,
	group,
} from '@angular/animations'

export const scaleX = trigger('scaleX', [
	state(
		'in',
		style({
			opacity: '1',
			transform: 'scale(1)',
		}),
	),
	state(
		'out',
		style({
			opacity: '0',
			transform: 'scale(0)',
		}),
	),
	transition('in => out', [
		group([
			animate(
				'200ms linear',
				style({
					transform: 'scale(0)',
				}),
			),
			animate('300ms linear', style({})),
		]),
	]),
	transition('out => in', [
		group([
			animate(
				'100ms linear',
				style({
					opacity: '0',
				}),
			),
			animate(
				'200ms linear',
				style({
					opacity: '1',
					transform: 'scale(1)',
				}),
			),
		]),
	]),
])
