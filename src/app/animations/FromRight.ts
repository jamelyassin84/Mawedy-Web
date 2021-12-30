import { trigger, state, style, animate, transition } from '@angular/animations'

export const openFromRight = () => {
	const contentOpen = {
		opacity: 0,
		// transform: 'translateY(-50%)',
	}
	const contentClose = {
		transform: 'translateX(-50%) scale(5)',
	}
	return [
		trigger('content', [
			transition(':enter', [style(contentOpen), animate('.14s')]),
			transition(':leave', [style(contentClose), animate('.2s')]),
		]),
	]
}
