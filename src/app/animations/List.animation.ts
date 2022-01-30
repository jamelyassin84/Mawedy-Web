import {
	trigger,
	transition,
	style,
	animate,
	query,
	stagger,
} from '@angular/animations'

export const listAnimation = trigger('listAnimation', [
	transition('* <=> *', [
		query(
			':enter',
			[
				style({
					opacity: 0,
					transform: 'translate(0,15rem)',
					'box-shadow': 'var(--dropShadow)',
				}),
				stagger(
					'40ms',
					animate(
						'500ms cubic-bezier(.28,-0.86,0,1.11)',
						style({
							opacity: 1,
							transform: 'translate(0px,0) ',
							'box-shadow': 'none',
						}),
					),
				),
			],
			{ optional: true },
		),
		query(
			':leave',
			animate('200ms', style({ opacity: 0, transform: 'translate(-15rem,0) ' })),
			{ optional: true },
		),
	]),
])
