import { DialogsState } from '../store/interfaces/dialogs-state';
import { operationMock } from './opreration.mock';
import { goalMock } from './goal.mock';

export const dialogsStateMock: DialogsState = {
	createOperationDialogOpened: false,
	updateOperationDialogOpened: false,
	updateOperationDialogPayload: operationMock,
	createGoalDialogOpened: false,
	updateGoalDialogOpened: false,
	updateGoalDialogPayload: goalMock,
	errorDialogOpened: false
}
