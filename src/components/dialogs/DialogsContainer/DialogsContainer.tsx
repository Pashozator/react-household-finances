import React from 'react';
import { ErrorDialog } from '../ErrorDialog/ErrorDialog';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectAddGoalDialogOpened,
	selectAddOperationDialogOpened,
	selectEditGoalDialogOpened,
	selectEditGoalDialogPayload,
	selectEditOperationDialogOpened,
	selectEditOperationDialogPayload,
	selectErrorDialogOpened
} from '../../../store/selectors/dialogs.selectors';
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
	const addOperationDialogOpened = useSelector(selectAddOperationDialogOpened);
	const editOperationDialogOpened = useSelector(selectEditOperationDialogOpened);
	const editOperationDialogPayload = useSelector(selectEditOperationDialogPayload);
	const addGoalDialogOpened = useSelector(selectAddGoalDialogOpened);
	const editGoalDialogOpened = useSelector(selectEditGoalDialogOpened);
	const editGoalDialogPayload = useSelector(selectEditGoalDialogPayload);
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
