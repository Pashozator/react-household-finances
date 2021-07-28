import React from 'react';
import { AddOperationDialogProps } from './AddOperationDialog.props';
import { Dialog, DialogTitle } from '@material-ui/core';
import { OperationForm } from '../OperationForm/OperationForm';
import { useOperationForm } from '../../../hooks/history/use-operation-form';

export const AddOperationDialog: React.FC<AddOperationDialogProps> = (props: AddOperationDialogProps) => {
	const { classes, onClose, ...other } = props;
	const { initialValues, validate } = useOperationForm();

	const close = () => onClose();

	const submit = (values: any) => onClose(values);

	return (
		<Dialog onClose={close} {...other}>
			<DialogTitle>Add operation</DialogTitle>
			<OperationForm initialValues={initialValues} validate={validate} cancel={close} submit={submit}/>
		</Dialog>
	);
}
