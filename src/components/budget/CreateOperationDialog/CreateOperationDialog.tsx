import React from 'react';
import { CreateOperationDialogProps } from './CreateOperationDialog.props';
import { Dialog, DialogTitle } from '@material-ui/core';
import { OperationForm } from '../OperationForm/OperationForm';
import { useOperationForm } from '../../../hooks/budget/use-operation-form';
import { OperationFormValues } from '../../../interfaces/operation-form-values';

export const CreateOperationDialog: React.FC<CreateOperationDialogProps> = React.memo((props: CreateOperationDialogProps) => {
	const { open, onClose, onSubmit } = props;
	const { initialValues, validate } = useOperationForm();

	const close = () => onClose();

	const submit = (values: OperationFormValues) => {
		if (Object.keys(validate(values)).length) {
			return;
		}

		onSubmit({
			label: values.label,
			value: parseFloat(values.value),
			date: values.date,
			description: values.description
		});
	}

	return (
		<Dialog onClose={close} open={open}>
			<DialogTitle>Add operation</DialogTitle>
			<OperationForm initialValues={initialValues} validate={validate} cancel={close} submit={submit}/>
		</Dialog>
	);
});
