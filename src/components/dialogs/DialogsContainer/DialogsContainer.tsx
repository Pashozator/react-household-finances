import React from 'react';
import { AddOperationDialog } from '../../history/AddOperationDialog/AddOperationDialog';
import { AddGoalDialog } from '../../goals/AddGoalDialog/AddGoalDialog';
import { AuthorDialog } from '../AuthorDialog/AuthorDialog';
import { DialogsContainerProps } from './DialogsContainer.props';
import { EditOperationDialog } from '../../history/EditOperationDialog/EditOperationDialog';
import { EditGoalDialog } from '../../goals/EditGoalDialog/EditGoalDialog';
import { ErrorDialog } from '../ErrorDialog/ErrorDialog';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectAddGoalDialogOpened,
	selectAddOperationDialogOpened, selectAuthorDialogOpened, selectEditGoalDialogOpened, selectEditGoalDialogPayload,
	selectEditOperationDialogOpened, selectEditOperationDialogPayload, selectErrorDialogOpened
} from '../../../store/selectors/dialogs.selectors';
import { addOperationAction, editOperationAction } from '../../../store/actions/budget.actions';
import {
	closeAddGoalDialogAction,
	closeAddOperationDialogAction, closeAuthorDialogAction, closeEditGoalDialogAction,
	closeEditOperationDialogAction, closeErrorDialogAction
} from '../../../store/actions/dialogs.actions';
import { addGoalAction, editGoalAction } from '../../../store/actions/goals.actions';

export const DialogsContainer: React.FC<DialogsContainerProps> = (props: DialogsContainerProps) => {
	const dispatch = useDispatch();
	const addOperationDialogOpened = useSelector(selectAddOperationDialogOpened);
	const editOperationDialogOpened = useSelector(selectEditOperationDialogOpened);
	const editOperationDialogPayload = useSelector(selectEditOperationDialogPayload);
	const addGoalDialogOpened = useSelector(selectAddGoalDialogOpened);
	const editGoalDialogOpened = useSelector(selectEditGoalDialogOpened);
	const editGoalDialogPayload = useSelector(selectEditGoalDialogPayload);
	const authorDialogOpened = useSelector(selectAuthorDialogOpened);
	const errorDialogOpened = useSelector(selectErrorDialogOpened);

	const closeAddOperationDialog = (result: any) => {
		if (result) {
			dispatch(addOperationAction(result));
		}

		dispatch(closeAddOperationDialogAction());
	}

	const closeEditOperationDialog = (result: any) => {
		if (result) {
			dispatch(editOperationAction(result));
		}

		dispatch(closeEditOperationDialogAction());
	}

	const closeAddGoalDialog = (result: any) => {
		if (result) {
			dispatch(addGoalAction(result));
		}

		dispatch(closeAddGoalDialogAction());
	}

	const closeEditGoalDialog = (result: any) => {
		if (result) {
			dispatch(editGoalAction(result));
		}

		dispatch(closeEditGoalDialogAction());
	}

	const closeAuthorDialog = () => dispatch(closeAuthorDialogAction());

	const closeErrorDialog = () => dispatch(closeErrorDialogAction());

	return (
		<>
			<AddOperationDialog
				open={addOperationDialogOpened}
				onClose={closeAddOperationDialog}
			/>
			<EditOperationDialog
				open={editOperationDialogOpened}
				operation={editOperationDialogPayload}
				onClose={closeEditOperationDialog}
			/>
			<AddGoalDialog
				open={addGoalDialogOpened}
				onClose={closeAddGoalDialog}
			/>
			<EditGoalDialog
				open={editGoalDialogOpened}
				goal={editGoalDialogPayload}
				onClose={closeEditGoalDialog}
			/>
			<AuthorDialog
				open={authorDialogOpened}
				onClose={closeAuthorDialog}
			/>
			<ErrorDialog
				open={errorDialogOpened}
				onClose={closeErrorDialog}
			/>
		</>
	);
}
