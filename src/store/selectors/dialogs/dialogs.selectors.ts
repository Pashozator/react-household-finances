import { createSelector } from 'reselect';
import { RootState } from '../../interfaces/root-state.interface';
import { DialogsState } from '../../interfaces/dialogs-state';

export const selectDialogs = (state: RootState) => state.dialogs;

export const selectCreateOperationDialogOpened = createSelector(
	selectDialogs,
	(state: DialogsState) => state.createOperationDialogOpened
);

export const selectUpdateOperationDialogOpened = createSelector(
	selectDialogs,
	(state: DialogsState) => state.updateOperationDialogOpened
);

export const selectUpdateOperationDialogPayload = createSelector(
	selectDialogs,
	(state: DialogsState) => state.updateOperationDialogPayload
);

export const selectCreateGoalDialogOpened = createSelector(
	selectDialogs,
	(state: DialogsState) => state.createGoalDialogOpened
);

export const selectUpdateGoalDialogOpened = createSelector(
	selectDialogs,
	(state: DialogsState) => state.updateGoalDialogOpened
);

export const selectUpdateGoalDialogPayload = createSelector(
	selectDialogs,
	(state: DialogsState) => state.updateGoalDialogPayload
);

export const selectErrorDialogOpened = createSelector(
	selectDialogs,
	(state: DialogsState) => state.errorDialogOpened
);
