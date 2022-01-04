import { trigger, style, animate, transition } from '@angular/animations'

export const SlideInTop = () => {
	const contentOpen = {
		transform: 'translateY(50%)',
	}
	const contentClose = {
		transform: 'translateX(-150%)',
	}
	return [
		trigger('content', [
			transition(':enter', [style(contentOpen), animate('.14s')]),
			transition(':leave', [animate('.14s'), style(contentClose)]),
		]),
	]
}
