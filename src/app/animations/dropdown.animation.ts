import {
	trigger,
	transition,
	animate,
	style,
	state,
	group,
} from '@angular/animations'

export const dropDownAnim = trigger('dropDownAnim', [
	state(
		'in',
		style({
			opacity: '1',
			transform: 'translateY(0)',
		}),
	),
	state(
		'out',
		style({
			opacity: '0',
			transform: 'translateY(2rem)',
		}),
	),
	transition('in => out', [
		group([
			animate(
				'1200ms linear',
				style({
					transform: 'translateY(-0)',
				}),
			),
			animate(
				'1300ms linear',
				style({
					transform: 'translateY(5rem)',
				}),
			),
		]),
	]),
	transition('out => in', [
		group([
			animate(
				'50ms linear',
				style({
					opacity: '0',
					transform: 'translateY(2rem)',
				}),
			),
			animate(
				'100ms linear',
				style({
					opacity: '1',
					transform: 'translateY(0)',
				}),
			),
		]),
	]),
])
