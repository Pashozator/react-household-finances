import React from 'react';
import { ErrorDialog } from '../ErrorDialog/ErrorDialog';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCreateGoalDialogOpened,
	selectCreateOperationDialogOpened,
	selectErrorDialogOpened,
	selectUpdateGoalDialogOpened,
	selectUpdateGoalDialogPayload,
	selectUpdateOperationDialogOpened,
	selectUpdateOperationDialogPayload
} from '../../../store/selectors/dialogs/dialogs.selectors';
import { createOperationAction, updateOperationAction } from '../../../store/actions/budget.actions';
import {
	closeCreateGoalDialogAction,
	closeCreateOperationDialogAction,
	closeErrorDialogAction,
	closeUpdateGoalDialogAction,
	closeUpdateOperationDialogAction
} from '../../../store/actions/dialogs.actions';
import { createGoalAction, updateGoalAction } from '../../../store/actions/goals.actions';
import { CreateOperationDialog } from '../../budget/CreateOperationDialog/CreateOperationDialog';
import { UpdateOperationDialog } from '../../budget/UpdateOperationDialog/UpdateOperationDialog';
import { CreateGoalDialog } from '../../goals/CreateGoalDialog/CreateGoalDialog';
import { UpdateGoalDialog } from '../../goals/UpdateGoalDialog/UpdateGoalDialog';
import { CreateGoalEndpointRequestBody } from '../../../domain/endpoints/goals/create-goal.endpoint';
import { UpdateGoalEndpointRequestBody } from '../../../domain/endpoints/goals/update-goal.endpoint';
import { CreateOperationEndpointRequestBody } from '../../../domain/endpoints/budget/create-operation.endpoint';
import { UpdateOperationEndpointRequestBody } from '../../../domain/endpoints/budget/update-operation.endpoint';

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

	const submitAddOperationDialog = (createOperationRequestBody: CreateOperationEndpointRequestBody) => dispatch(createOperationAction(createOperationRequestBody));

	const closeEditOperationDialog = () => dispatch(closeUpdateOperationDialogAction());

	const submitEditOperationDialog = (id: string, updateOperationRequestBody: UpdateOperationEndpointRequestBody) => dispatch(updateOperationAction({
		id,
		updateOperationRequestBody
	}));

	const closeAddGoalDialog = () => dispatch(closeCreateGoalDialogAction());

	const submitAddGoalDialog = (createGoalRequestBody: CreateGoalEndpointRequestBody) => dispatch(createGoalAction(createGoalRequestBody));

	const closeEditGoalDialog = () => dispatch(closeUpdateGoalDialogAction());

	const submitEditGoalDialog = (id: string, updateGoalRequestBody: UpdateGoalEndpointRequestBody) => dispatch(updateGoalAction({
		id,
		putGoalRequestBody: updateGoalRequestBody
	}));

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
