export const OPEN_ADD_OPERATION_DIALOG = '[Dialogs] Open add operation dialog';
export const CLOSE_ADD_OPERATION_DIALOG = '[Dialogs] Close add operation dialog';
export const OPEN_EDIT_OPERATION_DIALOG = '[Dialogs] Open edit operation dialog';
export const CLOSE_EDIT_OPERATION_DIALOG = '[Dialogs] Close edit operation dialog';
export const OPEN_ADD_GOAL_DIALOG = '[Dialogs] Open add goal dialog';
export const CLOSE_ADD_GOAL_DIALOG = '[Dialogs] Close add goal dialog';
export const OPEN_EDIT_GOAL_DIALOG = '[Dialogs] Open edit goal dialog';
export const CLOSE_EDIT_GOAL_DIALOG = '[Dialogs] Close edit goal dialog';

export const openAddOperationDialogAction = () => {
	return {
		type: OPEN_ADD_OPERATION_DIALOG
	}
};

export const closeAddOperationDialogAction = () => {
	return {
		type: CLOSE_ADD_OPERATION_DIALOG
	}
};

export const openEditOperationDialogAction = operation => {
	return {
		type: OPEN_EDIT_OPERATION_DIALOG,
		payload: operation
	}
};

export const closeEditOperationDialogAction = () => {
	return {
		type: CLOSE_EDIT_OPERATION_DIALOG
	}
};

export const openAddGoalDialogAction = () => {
	return {
		type: OPEN_ADD_GOAL_DIALOG
	}
};

export const closeAddGoalDialogAction = () => {
	return {
		type: CLOSE_ADD_GOAL_DIALOG
	}
};

export const openEditGoalDialogAction = goal => {
	return {
		type: OPEN_EDIT_GOAL_DIALOG,
		payload: goal
	}
};

export const closeEditGoalDialogAction = () => {
	return {
		type: CLOSE_EDIT_GOAL_DIALOG
	}
};
