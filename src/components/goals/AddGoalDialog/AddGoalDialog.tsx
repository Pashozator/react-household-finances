import React from 'react';
import './AddGoalDialog.scss';
import { Dialog, DialogTitle } from '@material-ui/core';
import { AddGoalDialogProps } from './AddGoalDialog.props';
import { GoalForm } from '../GoalForm/GoalForm';
import { useGoalForm } from '../../../hooks/goals/use-goal-form';

export const AddGoalDialog: React.FC<AddGoalDialogProps> = (props: AddGoalDialogProps) => {
	const { classes, onClose, ...other } = props;
	const { initialValues, validate } = useGoalForm();

	const close = () => onClose();

	const submit = (values: any) => onClose(values);

	return (
		<Dialog onClose={close} {...other}>
			<DialogTitle>Add goal</DialogTitle>
			<GoalForm initialValues={initialValues} validate={validate} cancel={close} submit={submit} />
		</Dialog>
	);
}
