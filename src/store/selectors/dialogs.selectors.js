import { createSelector } from 'reselect';

export const selectDialogs = state => state.get('dialogs');

export const selectAddOperationDialogOpened = createSelector(
	selectDialogs,
	substate => substate.get('addOperationDialogOpened')
);

export const selectEditOperationDialogOpened = createSelector(
	selectDialogs,
	substate => substate.get('editOperationDialogOpened')
);

export const selectEditOperationDialogPayload = createSelector(
	selectDialogs,
	substate => substate.get('editOperationDialogPayload').toJS()
);

export const selectAddGoalDialogOpened = createSelector(
	selectDialogs,
	substate => substate.get('addGoalDialogOpened')
);

export const selectEditGoalDialogOpened = createSelector(
	selectDialogs,
	substate => substate.get('editGoalDialogOpened')
);

export const selectEditGoalDialogPayload = createSelector(
	selectDialogs,
	substate => substate.get('editGoalDialogPayload').toJS()
);

export const selectAuthorDialogOpened = createSelector(
	selectDialogs,
	substate => substate.get('authorDialogOpened')
);
