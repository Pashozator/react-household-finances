import React from 'react';
import { CreateOperationDialogProps } from './CreateOperationDialog.props';
import { Dialog, DialogTitle } from '@material-ui/core';
import { OperationForm } from '../OperationForm/OperationForm';
import { useOperationForm } from '../../../hooks/budget/use-operation-form';
import { OperationFormValues } from '../../../interfaces/operation-form-values';
import { format } from 'date-fns';

export const CreateOperationDialog: React.FC<CreateOperationDialogProps> = React.memo((props: CreateOperationDialogProps) => {
	const { open, onClose, onSubmit } = props;
	const { initialValues, validate } = useOperationForm();

	const close = () => onClose();

	const submit = (values: OperationFormValues) => {
		if (!values.label || !values.value || !values.date || !values.description) {
			return;
		}

		onSubmit({
			label: values.label,
			value: values.value,
			date: format(values.date, 'dd.MM.yyyy'),
			description: values.description
		});
	}

	return (
		<Dialog className="dialog" onClose={close} open={open}>
			<DialogTitle>Add operation</DialogTitle>
			<OperationForm initialValues={initialValues} validate={validate} cancel={close} submit={submit}/>
		</Dialog>
	);
});
