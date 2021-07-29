import React from 'react';
import { AddOperationDialog } from '../../budget/AddOperationDialog/AddOperationDialog';
import { AddGoalDialog } from '../../goals/AddGoalDialog/AddGoalDialog';
import { EditOperationDialog } from '../../budget/EditOperationDialog/EditOperationDialog';
import { EditGoalDialog } from '../../goals/EditGoalDialog/EditGoalDialog';
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
import { addOperationAction, editOperationAction } from '../../../store/actions/budget.actions';
import {
	closeAddGoalDialogAction,
	closeAddOperationDialogAction,
	closeEditGoalDialogAction,
	closeEditOperationDialogAction,
	closeErrorDialogAction
} from '../../../store/actions/dialogs.actions';
import { addGoalAction, editGoalAction } from '../../../store/actions/goals.actions';
import { Operation } from '../../../domain/interfaces/operation';
import { Goal } from '../../../domain/interfaces/goal';

export const DialogsContainer: React.FC = React.memo(() => {
	const dispatch = useDispatch();
	const addOperationDialogOpened = useSelector(selectAddOperationDialogOpened);
	const editOperationDialogOpened = useSelector(selectEditOperationDialogOpened);
	const editOperationDialogPayload = useSelector(selectEditOperationDialogPayload);
	const addGoalDialogOpened = useSelector(selectAddGoalDialogOpened);
	const editGoalDialogOpened = useSelector(selectEditGoalDialogOpened);
	const editGoalDialogPayload = useSelector(selectEditGoalDialogPayload);
	const errorDialogOpened = useSelector(selectErrorDialogOpened);

	const closeAddOperationDialog = () => dispatch(closeAddOperationDialogAction());

	const submitAddOperationDialog = (operation: Operation) => dispatch(addOperationAction(operation));

	const closeEditOperationDialog = () => dispatch(closeEditOperationDialogAction());

	const submitEditOperationDialog = (operation: Operation) => dispatch(editOperationAction(operation));

	const closeAddGoalDialog = () => dispatch(closeAddGoalDialogAction());

	const submitAddGoalDialog = (goal: Goal) => dispatch(addGoalAction(goal));

	const closeEditGoalDialog = () => dispatch(closeEditGoalDialogAction());

	const submitEditGoalDialog = (goal: Goal) => dispatch(editGoalAction(goal));

	const closeErrorDialog = () => dispatch(closeErrorDialogAction());

	return (
		<>
			<AddOperationDialog
				open={addOperationDialogOpened}
				onClose={closeAddOperationDialog}
				onSubmit={submitAddOperationDialog}
			/>
			<EditOperationDialog
				open={editOperationDialogOpened}
				operation={editOperationDialogPayload}
				onClose={closeEditOperationDialog}
				onSubmit={submitEditOperationDialog}
			/>
			<AddGoalDialog
				open={addGoalDialogOpened}
				onClose={closeAddGoalDialog}
				onSubmit={submitAddGoalDialog}
			/>
			<EditGoalDialog
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
