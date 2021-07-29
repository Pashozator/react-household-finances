import React, { useEffect } from 'react';
import { EditGoalDialogProps } from './EditGoalDialog.props';
import { Dialog, DialogTitle } from '@material-ui/core';
import { useGoalForm } from '../../../hooks/goals/use-goal-form';
import { GoalForm } from '../GoalForm/GoalForm';
import { GoalFormValues } from '../../../interfaces/goal-form-values';
import { Goal } from '../../../domain/interfaces/goal';

export const EditGoalDialog: React.FC<EditGoalDialogProps> = React.memo((props: EditGoalDialogProps) => {
	const { onClose, onSubmit, goal, open } = props;
	const { initialValues, validate, patchValues } = useGoalForm();

	useEffect(() => {
		patchValues(goal);
	}, [goal, patchValues]);

	const close = () => onClose();

	const submit = (values: GoalFormValues) => {
		if (Object.keys(validate(values)).length) {
			return;
		}

		onSubmit({ id: goal.id, ...values } as Goal);
	}

	return (
		<Dialog onClose={close} open={open}>
			<DialogTitle>Edit goal</DialogTitle>
			<GoalForm initialValues={initialValues} validate={validate} cancel={close} submit={submit} />
		</Dialog>
	);
});
