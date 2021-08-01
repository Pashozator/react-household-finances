import React from 'react';
import { ErrorDialog } from '../ErrorDialog/ErrorDialog';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCreateGoalDialogOpened,
	selectCreateOperationDialogOpened,
	selectUpdateGoalDialogOpened,
	selectUpdateGoalDialogPayload,
	selectUpdateOperationDialogOpened,
	selectUpdateOperationDialogPayload,
	selectErrorDialogOpened
} from '../../../store/selectors/dialogs/dialogs.selectors';
import { createOperationAction, updateOperationAction } from '../../../store/actions/budget.actions';
import {
	closeCreateGoalDialogAction,
	closeCreateOperationDialogAction,
	closeUpdateGoalDialogAction,
	closeUpdateOperationDialogAction,
	closeErrorDialogAction
} from '../../../store/actions/dialogs.actions';
import { createGoalAction, updateGoalAction } from '../../../store/actions/goals.actions';
import { Operation } from '../../../domain/interfaces/operation';
import { Goal } from '../../../domain/interfaces/goal';
import { CreateOperationDialog } from '../../budget/CreateOperationDialog/CreateOperationDialog';
import { UpdateOperationDialog } from '../../budget/UpdateOperationDialog/UpdateOperationDialog';
import { CreateGoalDialog } from '../../goals/CreateGoalDialog/CreateGoalDialog';
import { UpdateGoalDialog } from '../../goals/UpdateGoalDialog/UpdateGoalDialog';

export const DialogsContainer: React.FC = React.memo(() => {
	const dispatch = useDispatch();
	const addOperationDialogOpened = useSelector(selectCreateOperationDialogOpened);
	const editOperationDialogOpened = useSelector(selectUpdateOperationDialogOpened);
	const editOperationDialogPayload = useSelector(selectUpdateOperationDialogPayload);
	const addGoalDialogOpened = useSelector(selectCreateGoalDialogOpened);
	const editGoalDialogOpened = useSelector(selectUpdateGoalDialogOpened);
	const editGoalDialogPayload = useSelector(selectUpdateGoalDialogPayload);
	const errorDialogOpened = useSelector(selectErrorDialogOpened);

	const closeAddOperationDialog = () => dispatch(closeCreateOperationDialogAction());

	const submitAddOperationDialog = (operation: Operation) => dispatch(createOperationAction(operation));

	const closeEditOperationDialog = () => dispatch(closeUpdateOperationDialogAction());

	const submitEditOperationDialog = (operation: Operation) => dispatch(updateOperationAction(operation));

	const closeAddGoalDialog = () => dispatch(closeCreateGoalDialogAction());

	const submitAddGoalDialog = (goal: Goal) => dispatch(createGoalAction(goal));

	const closeEditGoalDialog = () => dispatch(closeUpdateGoalDialogAction());

	const submitEditGoalDialog = (goal: Goal) => dispatch(updateGoalAction(goal));

	const closeErrorDialog = () => dispatch(closeErrorDialogAction());

	return (
		<>
			<CreateOperationDialog
				open={addOperationDialogOpened}
				onClose={closeAddOperationDialog}
				onSubmit={submitAddOperationDialog}
			/>
			<UpdateOperationDialog
				open={editOperationDialogOpened}
				operation={editOperationDialogPayload}
				onClose={closeEditOperationDialog}
				onSubmit={submitEditOperationDialog}
			/>
			<CreateGoalDialog
				open={addGoalDialogOpened}
				onClose={closeAddGoalDialog}
				onSubmit={submitAddGoalDialog}
			/>
			<UpdateGoalDialog
				open={editGoalDialogOpened}
				goal={editGoalDialogPayload}
				onClose={closeEditGoalDialog}
				onSubmit={submitEditGoalDialog}
			/>
			<ErrorDialog
				open={errorDialogOpened}
				onClose={closeErrorDialog}
			/>
		</>
	);
});
