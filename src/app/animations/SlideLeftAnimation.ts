import {
	trigger,
	transition,
	animate,
	style,
	state,
	group,
	query,
} from '@angular/animations'

const contentOpen = {
	transform: 'translateY(-10%)',
	opacity: 1,
}

const contentClose = {
	transform: 'translateY(150%)',
	opacity: 0.5,
}

export const slideLeft = trigger('slideLeft', [
	transition('* <=> *', [
		query(':enter', [animate('.4s ease-out', style(contentOpen))], {
			optional: true,
		}),
		query(':leave', animate('.2s', style(contentClose)), {
			optional: true,
		}),
	]),
])

// export const slideLeft = trigger('slideLeft', [
// 	state(
// 		'in',
// 		style({
// 			opacity: '1',
// 			transform: 'translateX(0%)',
// 		}),
// 	),
// 	state(
// 		'out',
// 		style({
// 			opacity: '0',
// 			transform: 'translateX(100%)',
// 		}),
// 	),
// 	transition('in => out', [
// 		group([
// 			animate(
// 				'120ms linear',
// 				style({
// 					transform: 'translateX(100%)',
// 				}),
// 			),
// 			animate(
// 				'130ms linear',
// 				style({
// 					opacity: '0',
// 				}),
// 			),
// 		]),
// 	]),
// 	transition('out => in', [
// 		group([
// 			animate(
// 				'200ms linear',
// 				style({
// 					opacity: '0',
// 				}),
// 			),
// 			animate(
// 				'300ms linear',
// 				style({
// 					opacity: '1',
// 					transform: 'translateX(0%)',
// 				}),
// 			),
// 		]),
// 	]),
// ])
