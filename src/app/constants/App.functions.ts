import { Patient } from '../models/types'

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

export function resolveName(
	patient: Patient,
	type: 'reverse' | 'normal' = 'normal',
): string {
	if (type === 'reverse') {
		return `${patient.last}, ${patient.first} ${patient.middle}`
	}
	return ` ${patient.first} ${patient.middle} ${patient.last}`
}

export function resolveAddress(patient: Patient): string {
	return ` ${patient.country} ${patient.city} ${patient.address}`
}
