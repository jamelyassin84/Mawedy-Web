import { FileInterface } from '../models/File.model'
export const trigger = (id: string): void => {
	return document.getElementById(id)?.click()
}

export const readFile = (
	file: any,
	isBase64: boolean = false,
): Promise<string> => {
	return new Promise<string>((resolve, reject) => {
		if (!file) {
			resolve('')
		}
		const reader: any = new FileReader()
		reader.onload = (e: any) => {
			const text = reader.result.toString()
			resolve(text)
		}
		reader.readAsText(file)
	})
}

export const readFiles = (event: any): FileInterface => {
	let base64: FileReader[] = []
	let files: File[] = []
	Object.keys(event.target.files).forEach((i: any) => {
		const reader = new FileReader()
		reader.readAsDataURL(event.target.files[i])
		reader.onload = (event: any) => {
			base64.push(event.target.result as FileReader)
			files.push(event.target.files[i] as File)
		}
	})
	return {
		base64: base64,
		files: files,
	}
}
