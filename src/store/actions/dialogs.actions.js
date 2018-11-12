export const OPEN_ADD_OPERATION_DIALOG = '[Dialogs] Open add Operation dialog';
export const CLOSE_ADD_OPERATION_DIALOG = '[Dialogs] Close add Operation dialog';
export const OPEN_EDIT_OPERATION_DIALOG = '[Dialogs] Open edit Operation dialog';
export const CLOSE_EDIT_OPERATION_DIALOG = '[Dialogs] Close edit Operation dialog';
export const OPEN_ADD_GOAL_DIALOG = '[Dialogs] Open add Goal dialog';
export const CLOSE_ADD_GOAL_DIALOG = '[Dialogs] Close add Goal dialog';
export const OPEN_EDIT_GOAL_DIALOG = '[Dialogs] Open edit Goal dialog';
export const CLOSE_EDIT_GOAL_DIALOG = '[Dialogs] Close edit Goal dialog';
export const OPEN_AUTHOR_DIALOG = '[Dialogs] Open author dialog';
export const CLOSE_AUTHOR_DIALOG = '[Dialogs] Close author dialog';
export const OPEN_ERROR_DIALOG = '[Dialogs] Open error dialog';
export const CLOSE_ERROR_DIALOG = '[Dialogs] Close error dialog';

export const openAddOperationDialogAction = () => ({ type: OPEN_ADD_OPERATION_DIALOG });

export const closeAddOperationDialogAction = () => ({ type: CLOSE_ADD_OPERATION_DIALOG });

export const openEditOperationDialogAction = operation => ({ type: OPEN_EDIT_OPERATION_DIALOG, payload: operation });

export const closeEditOperationDialogAction = () => ({ type: CLOSE_EDIT_OPERATION_DIALOG });

export const openAddGoalDialogAction = () => ({ type: OPEN_ADD_GOAL_DIALOG });

export const closeAddGoalDialogAction = () => ({ type: CLOSE_ADD_GOAL_DIALOG });

export const openEditGoalDialogAction = goal => ({ type: OPEN_EDIT_GOAL_DIALOG, payload: goal });

export const closeEditGoalDialogAction = () => ({ type: CLOSE_EDIT_GOAL_DIALOG });

export const openAuthorDialogAction = () => ({ type: OPEN_AUTHOR_DIALOG });

export const closeAuthorDialogAction = () => ({ type: CLOSE_AUTHOR_DIALOG });

export const openErrorDialogAction = () => ({ type: OPEN_ERROR_DIALOG });

export const closeErrorDialogAction = () => ({ type: CLOSE_ERROR_DIALOG });
