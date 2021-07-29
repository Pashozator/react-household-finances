import React, { useEffect } from 'react';
import { EditGoalDialogProps } from './EditGoalDialog.props';
import { Dialog, DialogTitle } from '@material-ui/core';
import { useGoalForm } from '../../../hooks/goals/use-goal-form';
import { GoalForm } from '../GoalForm/GoalForm';

export const EditGoalDialog: React.FC<EditGoalDialogProps> = React.memo((props: EditGoalDialogProps) => {
	const { classes, onClose, goal, ...other } = props;
	const { initialValues, validate, patchValues } = useGoalForm();

	useEffect(() => {
		patchValues(goal);
	}, [goal, patchValues]);

	const close = () => onClose();

	const submit = (values: any) => onClose({ id: goal.id, ...values });

	return (
		<Dialog onClose={close} {...other}>
			<DialogTitle>Edit goal</DialogTitle>
			<GoalForm initialValues={initialValues} validate={validate} cancel={close} submit={submit} />
		</Dialog>
	);
});
