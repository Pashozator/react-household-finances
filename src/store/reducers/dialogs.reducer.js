import * as DialogsActions from '../actions/dialogs.actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
	addOperationDialogOpened: false,
	editOperationDialogOpened: false,
	editOperationDialogPayload: { id: null, label: '', date: '', value: '', description: '' },
	addGoalDialogOpened: false,
	editGoalDialogOpened: false,
	editGoalDialogPayload: { id: null, label: '', value: '', description: '' },
	authorDialogOpened: false,
	errorDialogOpened: false
});

export function dialogReducer(state = initialState, action) {
	switch (action.type) {
		case DialogsActions.OPEN_ADD_OPERATION_DIALOG: {
			return state.setIn(['addOperationDialogOpened'], true);
		}
		case DialogsActions.CLOSE_ADD_OPERATION_DIALOG: {
			return state.setIn(['addOperationDialogOpened'], false);
		}
		case DialogsActions.OPEN_EDIT_OPERATION_DIALOG: {
			return state.setIn(['editOperationDialogOpened'], true)
				.setIn(['editOperationDialogPayload'], fromJS(action.payload));
		}
		case DialogsActions.CLOSE_EDIT_OPERATION_DIALOG: {
			return state.setIn(['editOperationDialogOpened'], false)
				.setIn(['editOperationDialogPayload'], fromJS({ id: null, label: '', date: '', value: '', description: '' }));
		}
		case DialogsActions.OPEN_ADD_GOAL_DIALOG: {
			return state.setIn(['addGoalDialogOpened'], true);
		}
		case DialogsActions.CLOSE_ADD_GOAL_DIALOG: {
			return state.setIn(['addGoalDialogOpened'], false);
		}
		case DialogsActions.OPEN_EDIT_GOAL_DIALOG: {
			return state.setIn(['editGoalDialogOpened'], true)
				.setIn(['editGoalDialogPayload'], fromJS(action.payload));
		}
		case DialogsActions.CLOSE_EDIT_GOAL_DIALOG: {
			return state.setIn(['editGoalDialogOpened'], false)
				.setIn(['editGoalDialogPayload]'], fromJS({ id: null, label: '', value: '', description: '' }));
		}
		case DialogsActions.OPEN_AUTHOR_DIALOG: {
			return state.setIn(['authorDialogOpened'], true);
		}
		case DialogsActions.CLOSE_AUTHOR_DIALOG: {
			return state.setIn(['authorDialogOpened'], false);
		}
		case DialogsActions.OPEN_ERROR_DIALOG: {
			return state.setIn(['errorDialogOpened'], true);
		}
		case DialogsActions.CLOSE_ERROR_DIALOG: {
			return state.setIn(['errorDialogOpened'], false);
		}
		default:
			return state;
	}
}
