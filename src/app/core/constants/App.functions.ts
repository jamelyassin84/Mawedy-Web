import { Patient } from '../../models/types'

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
		return `${patient.last}, ${patient.first} ${patient.middle} ${patient.ext}`
	}
	return ` ${patient.first} ${patient.middle} ${patient.last}`
}

export function resolveAddress(patient: Patient): string {
	return ` ${patient.country} ${patient.city} ${patient.address} ${patient.ext}`
}

export function resolveAge(dateString: string): number {
	const birthDate = new Date(dateString)
	const difference = Date.now() - birthDate.getTime()
	const ageDate = new Date(difference)
	return Math.abs(ageDate.getUTCFullYear() - 1970)
}
