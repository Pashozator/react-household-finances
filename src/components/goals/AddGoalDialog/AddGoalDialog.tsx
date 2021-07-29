import React from 'react';
import './AddGoalDialog.scss';
import { Dialog, DialogTitle } from '@material-ui/core';
import { AddGoalDialogProps } from './AddGoalDialog.props';
import { GoalForm } from '../GoalForm/GoalForm';
import { useGoalForm } from '../../../hooks/goals/use-goal-form';
import { GoalFormValues } from '../../../interfaces/goal-form-values';
import { Goal } from '../../../domain/interfaces/goal';

export const AddGoalDialog: React.FC<AddGoalDialogProps> = React.memo((props: AddGoalDialogProps) => {
	const { onClose, onSubmit, open } = props;
	const { initialValues, validate } = useGoalForm();

	const close = () => onClose();

	const submit = (values: GoalFormValues) => {
		if (Object.keys(validate(values)).length) {
			return;
		}

		onSubmit(values as Goal);
	}

	return (
		<Dialog onClose={close} open={open}>
			<DialogTitle>Add goal</DialogTitle>
			<GoalForm initialValues={initialValues} validate={validate} cancel={close} submit={submit}/>
		</Dialog>
	);
});
