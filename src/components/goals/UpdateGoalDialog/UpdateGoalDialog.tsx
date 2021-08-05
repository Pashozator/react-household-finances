import React, { useEffect } from 'react';
import { UpdateGoalDialogProps } from './UpdateGoalDialog.props';
import { Dialog, DialogTitle } from '@material-ui/core';
import { useGoalForm } from '../../../hooks/goals/use-goal-form';
import { GoalForm } from '../GoalForm/GoalForm';
import { GoalFormValues } from '../../../interfaces/goal-form-values';

export const UpdateGoalDialog: React.FC<UpdateGoalDialogProps> = React.memo((props: UpdateGoalDialogProps) => {
	const { onClose, onSubmit, goal, open } = props;
	const { initialValues, validate, patchValues } = useGoalForm();

	useEffect(() => {
		patchValues(goal);
	}, [goal, patchValues]);

	const close = () => onClose();

	const submit = (values: GoalFormValues) => {
		if (!values.label || !values.value || !values.description) {
			return;
		}

		onSubmit(goal.id, {
			label: values.label,
			value: values.value,
			description: values.description
		});
	}

	return (
		<Dialog onClose={close} open={open}>
			<DialogTitle>Edit goal</DialogTitle>
			<GoalForm initialValues={initialValues} validate={validate} cancel={close} submit={submit}/>
		</Dialog>
	);
});
