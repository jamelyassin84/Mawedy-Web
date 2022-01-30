import { Modal } from 'src/app/models/Modal.interface'
import { ActionParent, ModalActionsType } from './modal.actions'

const defaultState: any = {
	value: false,
	type: undefined,
}

const newState = (state: any, data: any) => {
	return Object.assign({}, state, data)
}

export function modalReducer(state = defaultState, action: ActionParent): any {
	console.log(action.type, state)
	switch (action.type) {
		case ModalActionsType.change:
			return action.payload
		default:
			return state
	}
}
