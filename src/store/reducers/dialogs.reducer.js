import * as DialogsActions from '../actions/dialogs.actions';

const initialState = {
	addOperationDialogOpened: false,
	editOperationDialogOpened: false,
	editOperationDialogPayload: { id: null, label: '', date: '', value: '', description: '' },
	addGoalDialogOpened: false,
	editGoalDialogOpened: false,
	editGoalDialogPayload: { id: null, label: '', value: '', description: '' }
};

export function dialogReducer(state = initialState, action) {
	switch (action.type) {
		case DialogsActions.OPEN_ADD_OPERATION_DIALOG: {
			return { ...state, addOperationDialogOpened: true };
		}
		case DialogsActions.CLOSE_ADD_OPERATION_DIALOG: {
			return { ...state, addOperationDialogOpened: false };
		}
		case DialogsActions.OPEN_EDIT_OPERATION_DIALOG: {
			return { ...state, editOperationDialogOpened: true, editOperationDialogPayload: action.payload };
		}
		case DialogsActions.CLOSE_EDIT_OPERATION_DIALOG: {
			return { ...state, editOperationDialogOpened: false, editOperationDialogPayload: { id: null, label: '', date: '', value: '', description: '' } };
		}
		case DialogsActions.OPEN_ADD_GOAL_DIALOG: {
			return { ...state, addGoalDialogOpened: true };
		}
		case DialogsActions.CLOSE_ADD_GOAL_DIALOG: {
			return { ...state, addGoalDialogOpened: false };
		}
		case DialogsActions.OPEN_EDIT_GOAL_DIALOG: {
			return { ...state, editGoalDialogOpened: true, editGoalDialogPayload: action.payload };
		}
		case DialogsActions.CLOSE_EDIT_GOAL_DIALOG: {
			return { ...state, editGoalDialogOpened: false, editGoalDialogPayload: { id: null, label: '', value: '', description: '' } };
		}
		default:
			return state;
	}
}
