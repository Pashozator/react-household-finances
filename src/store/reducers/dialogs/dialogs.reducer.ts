import { DialogsState } from '../../interfaces/dialogs-state';
import { ActionWithPayload } from '../../interfaces/action-with-payload.interface';
import { DialogsActions } from '../../actions/dialogs.actions';

export const dialogsInitialState: DialogsState = {
	addOperationDialogOpened: false,
	editOperationDialogOpened: false,
	editOperationDialogPayload: { id: '', label: '', date: '', value: 0, description: '' },
	addGoalDialogOpened: false,
	editGoalDialogOpened: false,
	editGoalDialogPayload: { id: '', label: '', value: 0, description: '', realized: false },
	errorDialogOpened: false
};

export function dialogsReducer(state: DialogsState = dialogsInitialState, action: ActionWithPayload<DialogsActions>) {
	switch (action.type) {
		case DialogsActions.OPEN_CREATE_OPERATION_DIALOG: {
			return { ...state, addOperationDialogOpened: true };
		}
		case DialogsActions.CLOSE_CREATE_OPERATION_DIALOG: {
			return { ...state, addOperationDialogOpened: false };
		}
		case DialogsActions.OPEN_UPDATE_OPERATION_DIALOG: {
			return { ...state, editOperationDialogOpened: true, editOperationDialogPayload: action.payload };
		}
		case DialogsActions.CLOSE_UPDATE_OPERATION_DIALOG: {
			return { ...state, editOperationDialogOpened: false,  editOperationDialogPayload: { id: '', label: '', date: '', value: 0, description: '' } };
		}
		case DialogsActions.OPEN_CREATE_GOAL_DIALOG: {
			return { ...state, addGoalDialogOpened: true };
		}
		case DialogsActions.CLOSE_CREATE_GOAL_DIALOG: {
			return { ...state, addGoalDialogOpened: false };
		}
		case DialogsActions.OPEN_UPDATE_GOAL_DIALOG: {
			return { ...state, editGoalDialogOpened: true, editGoalDialogPayload: action.payload };
		}
		case DialogsActions.CLOSE_UPDATE_GOAL_DIALOG: {
			return { ...state, editGoalDialogOpened: false, editGoalDialogPayload: { id: '', label: '', value: 0, description: '', realized: false } };
		}
		case DialogsActions.OPEN_ERROR_DIALOG: {
			return { ...state, errorDialogOpened: true };
		}
		case DialogsActions.CLOSE_ERROR_DIALOG: {
			return { ...state, errorDialogOpened: false };
		}
		default:
			return state;
	}
}
