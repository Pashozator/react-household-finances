import { Operation } from '../../domain/interfaces/operation';
import { Goal } from '../../domain/interfaces/goal';

export interface DialogsState {
	createOperationDialogOpened: boolean;
	updateOperationDialogOpened: boolean;
	updateOperationDialogPayload: Operation;
	createGoalDialogOpened: boolean;
	updateGoalDialogOpened: boolean;
	updateGoalDialogPayload: Goal;
	errorDialogOpened: boolean;
}
