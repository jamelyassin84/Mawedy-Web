import { throwError } from 'rxjs'
import { FileInterface } from '../models/File.model'
export const trigger = (id: string): void => {
	return document.getElementById(id)?.click()
}

export const readFile = (event: any): FileInterface | void => {
	if (event.target.files && event.target.files[0]) {
		const reader = new FileReader()
		reader.readAsDataURL(event.target.files[0])
		reader.onload = (e: any) => {
			return {
				base64: e.target.result,
				imageSource: event.target.files[0],
			}
		}
	}
	return console.error('No file has been selected')
}

export const readFiles = (event: any): FileInterface | void => {
	if (event.target.files && event.target.files[0]) {
		let base64: FileReader[] = []
		let imageSource: File[] = []
		Object.keys(event.target.files).forEach((i: any) => {
			const reader = new FileReader()
			reader.readAsDataURL(event.target.files[i])
			reader.onload = (event: any) => {
				base64.push(event.target.result as FileReader)
				imageSource.push(event.target.files[i] as File)
			}
		})
		return {
			base64: base64,
			imageSource: imageSource,
		}
	}
	return console.error('No file(s) has been selected')
}
