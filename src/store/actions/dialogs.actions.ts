import { Goal } from '../../domain/interfaces/goal';
import { Operation } from '../../domain/interfaces/operation';

export enum DialogsActions {
	OPEN_ADD_OPERATION_DIALOG = '[Dialogs] Open add Operation dialog',
	CLOSE_ADD_OPERATION_DIALOG = '[Dialogs] Close add Operation dialog',
	OPEN_EDIT_OPERATION_DIALOG = '[Dialogs] Open edit Operation dialog',
	CLOSE_EDIT_OPERATION_DIALOG = '[Dialogs] Close edit Operation dialog',
	OPEN_ADD_GOAL_DIALOG = '[Dialogs] Open add Goal dialog',
	CLOSE_ADD_GOAL_DIALOG = '[Dialogs] Close add Goal dialog',
	OPEN_EDIT_GOAL_DIALOG = '[Dialogs] Open edit Goal dialog',
	CLOSE_EDIT_GOAL_DIALOG = '[Dialogs] Close edit Goal dialog',
	OPEN_AUTHOR_DIALOG = '[Dialogs] Open author dialog',
	CLOSE_AUTHOR_DIALOG = '[Dialogs] Close author dialog',
	OPEN_ERROR_DIALOG = '[Dialogs] Open error dialog',
	CLOSE_ERROR_DIALOG = '[Dialogs] Close error dialog'
}

export const openAddOperationDialogAction = () => ({ type: DialogsActions.OPEN_ADD_OPERATION_DIALOG });

export const closeAddOperationDialogAction = () => ({ type: DialogsActions.CLOSE_ADD_OPERATION_DIALOG });

export const openEditOperationDialogAction = (operation: Operation) => ({ type: DialogsActions.OPEN_EDIT_OPERATION_DIALOG, payload: operation });

export const closeEditOperationDialogAction = () => ({ type: DialogsActions.CLOSE_EDIT_OPERATION_DIALOG });

export const openAddGoalDialogAction = () => ({ type: DialogsActions.OPEN_ADD_GOAL_DIALOG });

export const closeAddGoalDialogAction = () => ({ type: DialogsActions.CLOSE_ADD_GOAL_DIALOG });

export const openEditGoalDialogAction = (goal: Goal) => ({ type: DialogsActions.OPEN_EDIT_GOAL_DIALOG, payload: goal });

export const closeEditGoalDialogAction = () => ({ type: DialogsActions.CLOSE_EDIT_GOAL_DIALOG });

export const openAuthorDialogAction = () => ({ type: DialogsActions.OPEN_AUTHOR_DIALOG });

export const closeAuthorDialogAction = () => ({ type: DialogsActions.CLOSE_AUTHOR_DIALOG });

export const openErrorDialogAction = () => ({ type: DialogsActions.OPEN_ERROR_DIALOG });

export const closeErrorDialogAction = () => ({ type: DialogsActions.CLOSE_ERROR_DIALOG });
