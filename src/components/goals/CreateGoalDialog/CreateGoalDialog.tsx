import React from 'react';
import './CreateGoalDialog.scss';
import { Dialog, DialogTitle } from '@material-ui/core';
import { CreateGoalDialogProps } from './CreateGoalDialog.props';
import { GoalForm } from '../GoalForm/GoalForm';
import { useGoalForm } from '../../../hooks/goals/use-goal-form';
import { GoalFormValues } from '../../../interfaces/goal-form-values';

export const CreateGoalDialog: React.FC<CreateGoalDialogProps> = React.memo((props: CreateGoalDialogProps) => {
	const { onClose, onSubmit, open } = props;
	const { initialValues, validate } = useGoalForm();

	const close = () => onClose();

	const submit = (values: GoalFormValues) => {
		if (Object.keys(validate(values)).length) {
			return;
		}

		onSubmit({ label: values.label, value: parseFloat(values.value), description: values.description });
	}

	return (
		<Dialog onClose={close} open={open}>
			<DialogTitle>Add goal</DialogTitle>
			<GoalForm initialValues={initialValues} validate={validate} cancel={close} submit={submit}/>
		</Dialog>
	);
});
