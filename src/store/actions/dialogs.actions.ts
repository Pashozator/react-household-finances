import { Goal } from '../../domain/interfaces/goal';
import { Operation } from '../../domain/interfaces/operation';

export enum DialogsActions {
	OPEN_CREATE_OPERATION_DIALOG = '[Dialogs] Open create operation dialog',
	CLOSE_CREATE_OPERATION_DIALOG = '[Dialogs] Close create operation dialog',
	OPEN_UPDATE_OPERATION_DIALOG = '[Dialogs] Open update operation dialog',
	CLOSE_UPDATE_OPERATION_DIALOG = '[Dialogs] Close update operation dialog',
	OPEN_CREATE_GOAL_DIALOG = '[Dialogs] Open create goal dialog',
	CLOSE_CREATE_GOAL_DIALOG = '[Dialogs] Close create goal dialog',
	OPEN_UPDATE_GOAL_DIALOG = '[Dialogs] Open update goal dialog',
	CLOSE_UPDATE_GOAL_DIALOG = '[Dialogs] Close update goal dialog',
	OPEN_ERROR_DIALOG = '[Dialogs] Open error dialog',
	CLOSE_ERROR_DIALOG = '[Dialogs] Close error dialog'
}

export const openCreateOperationDialogAction = () => ({ type: DialogsActions.OPEN_CREATE_OPERATION_DIALOG });

export const closeCreateOperationDialogAction = () => ({ type: DialogsActions.CLOSE_CREATE_OPERATION_DIALOG });

export const openUpdateOperationDialogAction = (operation: Operation) => ({ type: DialogsActions.OPEN_UPDATE_OPERATION_DIALOG, payload: operation });

export const closeUpdateOperationDialogAction = () => ({ type: DialogsActions.CLOSE_UPDATE_OPERATION_DIALOG });

export const openCreateGoalDialogAction = () => ({ type: DialogsActions.OPEN_CREATE_GOAL_DIALOG });

export const closeCreateGoalDialogAction = () => ({ type: DialogsActions.CLOSE_CREATE_GOAL_DIALOG });

export const openUpdateGoalDialogAction = (goal: Goal) => ({ type: DialogsActions.OPEN_UPDATE_GOAL_DIALOG, payload: goal });

export const closeUpdateGoalDialogAction = () => ({ type: DialogsActions.CLOSE_UPDATE_GOAL_DIALOG });

export const openErrorDialogAction = () => ({ type: DialogsActions.OPEN_ERROR_DIALOG });

export const closeErrorDialogAction = () => ({ type: DialogsActions.CLOSE_ERROR_DIALOG });
