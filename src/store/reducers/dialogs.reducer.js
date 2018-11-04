import * as DialogsActions from '../actions/dialogs.actions';

const initialState = {
	addOperationDialogOpened: false,
	addGoalDialogOpened: false
};

export function dialogReducer(state = initialState, action) {
	switch (action.type) {
		case DialogsActions.OPEN_ADD_OPERATION_DIALOG: {
			return { ...state, addOperationDialogOpened: true };
		}
		case DialogsActions.CLOSE_ADD_OPERATION_DIALOG: {
			return { ...state, addOperationDialogOpened: false };
		}
		case DialogsActions.OPEN_ADD_GOAL_DIALOG: {
			return { ...state, addGoalDialogOpened: true };
		}
		case DialogsActions.CLOSE_ADD_GOAL_DIALOG: {
			return { ...state, addGoalDialogOpened: false };
		}
		default:
			return state;
	}
}
