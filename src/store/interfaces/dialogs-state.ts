import { Operation } from '../../domain/interfaces/operation';
import { Goal } from '../../domain/interfaces/goal';

export interface DialogsState {
	addOperationDialogOpened: boolean;
	editOperationDialogOpened: boolean;
	editOperationDialogPayload: Operation;
	addGoalDialogOpened: boolean;
	editGoalDialogOpened: boolean;
	editGoalDialogPayload: Goal;
	authorDialogOpened: boolean;
	errorDialogOpened: boolean;
}
