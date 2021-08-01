import { dialogsInitialState, dialogsReducer } from './dialogs.reducer';
import {
	closeCreateGoalDialogAction,
	closeCreateOperationDialogAction, closeUpdateGoalDialogAction,
	closeUpdateOperationDialogAction, closeErrorDialogAction, openCreateGoalDialogAction,
	openCreateOperationDialogAction, openUpdateGoalDialogAction, openUpdateOperationDialogAction, openErrorDialogAction
} from '../../actions/dialogs.actions';
import { operationMock } from '../../../mocks/opreration.mock';
import { Operation } from '../../../domain/interfaces/operation';
import { Goal } from '../../../domain/interfaces/goal';
import { goalMock } from '../../../mocks/goal.mock';

describe('dialogsReducer', () => {
	it('should return initial state', () => {
		expect(dialogsReducer(undefined, {} as any)).toEqual(dialogsInitialState);
	});

	it('should handle open create operation dialog', () => {
		expect(dialogsReducer(dialogsInitialState, openCreateOperationDialogAction())).toEqual({ ...dialogsInitialState, createOperationDialogOpened: true });
	});

	it('should handle close create operation dialog', () => {
		expect(dialogsReducer(dialogsInitialState, closeCreateOperationDialogAction())).toEqual({ ...dialogsInitialState, createOperationDialogOpened: false });
	});

	it('should handle open update operation dialog', () => {
		const operation: Operation = operationMock;

		expect(dialogsReducer(dialogsInitialState, openUpdateOperationDialogAction(operation))).toEqual({ ...dialogsInitialState, updateOperationDialogOpened: true, updateOperationDialogPayload: operation });
	});

	it('should handle close update operation dialog', () => {
		expect(dialogsReducer(dialogsInitialState, closeUpdateOperationDialogAction())).toEqual({ ...dialogsInitialState, updateOperationDialogOpened: false });
	});

	it('should handle open create goal dialog', () => {
		expect(dialogsReducer(dialogsInitialState, openCreateGoalDialogAction())).toEqual({ ...dialogsInitialState, createGoalDialogOpened: true });
	});

	it('should handle close create goal dialog', () => {
		expect(dialogsReducer(dialogsInitialState, closeCreateGoalDialogAction())).toEqual({ ...dialogsInitialState, createGoalDialogOpened: false });
	});

	it('should handle open update goal dialog', () => {
		const goal: Goal = goalMock;

		expect(dialogsReducer(dialogsInitialState, openUpdateGoalDialogAction(goal))).toEqual({ ...dialogsInitialState, updateGoalDialogOpened: true, updateGoalDialogPayload: goal });
	});

	it('should handle close update goal dialog', () => {
		expect(dialogsReducer(dialogsInitialState, closeUpdateGoalDialogAction())).toEqual({ ...dialogsInitialState, updateGoalDialogOpened: false });
	});

	it('should handle open error dialog', () => {
		expect(dialogsReducer(dialogsInitialState, openErrorDialogAction())).toEqual({ ...dialogsInitialState, errorDialogOpened: true });
	});

	it('should handle close error dialog', () => {
		expect(dialogsReducer(dialogsInitialState, closeErrorDialogAction())).toEqual({ ...dialogsInitialState, errorDialogOpened: false });
	});
});
