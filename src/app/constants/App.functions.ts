export function resolveBooking(appointment: any) {
	let color = '#E5EFF7'
	if (appointment.type === 'Mobile') {
		color = '#EDEAF7'
	}
	if (appointment.type === 'Clinic') {
		color = '#E9F0F1'
	}
	return {
		doctor: '',
		type: '',
		color: color,
		isCanceled: '',
	}
}
