import { createSelector } from 'reselect';
import { RootState } from '../interfaces/root-state.interface';
import { DialogsState } from '../interfaces/dialogs-state';

export const selectDialogs = (state: RootState) => state.dialogs;

export const selectAddOperationDialogOpened = createSelector(
	selectDialogs,
	(state: DialogsState) => state.addOperationDialogOpened
);

export const selectEditOperationDialogOpened = createSelector(
	selectDialogs,
	(state: DialogsState) => state.editOperationDialogOpened
);

export const selectEditOperationDialogPayload = createSelector(
	selectDialogs,
	(state: DialogsState) => state.editOperationDialogPayload
);

export const selectAddGoalDialogOpened = createSelector(
	selectDialogs,
	(state: DialogsState) => state.addGoalDialogOpened
);

export const selectEditGoalDialogOpened = createSelector(
	selectDialogs,
	(state: DialogsState) => state.editGoalDialogOpened
);

export const selectEditGoalDialogPayload = createSelector(
	selectDialogs,
	(state: DialogsState) => state.editGoalDialogPayload
);

export const selectErrorDialogOpened = createSelector(
	selectDialogs,
	(state: DialogsState) => state.errorDialogOpened
);
