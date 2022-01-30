import { Modal } from 'src/app/models/Modal.interface'
import { Action } from '@ngrx/store'

export const CHANGE_MODAL = '[Modal] Update'

export class ActionParent implements Action {
	type: any
	payload: any
}

export class ModalChange implements ActionParent {
	type = ModalActionsType.change
	constructor(public payload: any) {}
}

export enum ModalActionsType {
	change = 'Change',
}
