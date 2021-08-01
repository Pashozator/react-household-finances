import { RootState } from '../../interfaces/root-state.interface';
import { rootStateMock } from '../../../mocks/root-state.mock';
import {
	selectCreateGoalDialogOpened,
	selectCreateOperationDialogOpened,
	selectDialogs, selectErrorDialogOpened, selectUpdateGoalDialogOpened, selectUpdateGoalDialogPayload,
	selectUpdateOperationDialogOpened, selectUpdateOperationDialogPayload
} from './dialogs.selectors';

describe('dialogs selectors', () => {
	const state: RootState = rootStateMock;

	it('should select dialogs', () => {
		expect(selectDialogs(state)).toEqual(state.dialogs);
	});

	it('should select create operation dialog open status', () => {
		expect(selectCreateOperationDialogOpened(state)).toEqual(state.dialogs.createOperationDialogOpened);
	});

	it('should select update operation dialog open status', () => {
		expect(selectUpdateOperationDialogOpened(state)).toEqual(state.dialogs.updateOperationDialogOpened);
	});

	it('should select update operation dialog payload', () => {
		expect(selectUpdateOperationDialogPayload(state)).toEqual(state.dialogs.updateOperationDialogPayload);
	});

	it('should select create goal dialog open status', () => {
		expect(selectCreateGoalDialogOpened(state)).toEqual(state.dialogs.createGoalDialogOpened);
	});

	it('should select update goal dialog open status', () => {
		expect(selectUpdateGoalDialogOpened(state)).toEqual(state.dialogs.updateGoalDialogOpened);
	});

	it('should select update goal dialog payload', () => {
		expect(selectUpdateGoalDialogPayload(state)).toEqual(state.dialogs.updateGoalDialogPayload);
	});

	it('should select error dialog open status', () => {
		expect(selectErrorDialogOpened(state)).toEqual(state.dialogs.errorDialogOpened);
	});
});
