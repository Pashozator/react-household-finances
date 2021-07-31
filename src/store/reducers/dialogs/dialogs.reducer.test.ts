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
		expect(dialogsReducer(dialogsInitialState, openCreateOperationDialogAction())).toEqual({ ...dialogsInitialState, addOperationDialogOpened: true });
	});

	it('should handle close create operation dialog', () => {
		expect(dialogsReducer(dialogsInitialState, closeCreateOperationDialogAction())).toEqual({ ...dialogsInitialState, addOperationDialogOpened: false });
	});

	it('should handle open update operation dialog', () => {
		const operation: Operation = operationMock;

		expect(dialogsReducer(dialogsInitialState, openUpdateOperationDialogAction(operation))).toEqual({ ...dialogsInitialState, editOperationDialogOpened: true, editOperationDialogPayload: operation });
	});

	it('should handle close update operation dialog', () => {
		expect(dialogsReducer(dialogsInitialState, closeUpdateOperationDialogAction())).toEqual({ ...dialogsInitialState, editOperationDialogOpened: false });
	});

	it('should handle open create goal dialog', () => {
		expect(dialogsReducer(dialogsInitialState, openCreateGoalDialogAction())).toEqual({ ...dialogsInitialState, addGoalDialogOpened: true });
	});

	it('should handle close create goal dialog', () => {
		expect(dialogsReducer(dialogsInitialState, closeCreateGoalDialogAction())).toEqual({ ...dialogsInitialState, addGoalDialogOpened: false });
	});

	it('should handle open update goal dialog', () => {
		const goal: Goal = goalMock;

		expect(dialogsReducer(dialogsInitialState, openUpdateGoalDialogAction(goal))).toEqual({ ...dialogsInitialState, editGoalDialogOpened: true, editGoalDialogPayload: goal });
	});

	it('should handle close update goal dialog', () => {
		expect(dialogsReducer(dialogsInitialState, closeUpdateGoalDialogAction())).toEqual({ ...dialogsInitialState, editGoalDialogOpened: false });
	});

	it('should handle open error dialog', () => {
		expect(dialogsReducer(dialogsInitialState, openErrorDialogAction())).toEqual({ ...dialogsInitialState, errorDialogOpened: true });
	});

	it('should handle close error dialog', () => {
		expect(dialogsReducer(dialogsInitialState, closeErrorDialogAction())).toEqual({ ...dialogsInitialState, errorDialogOpened: false });
	});
});
