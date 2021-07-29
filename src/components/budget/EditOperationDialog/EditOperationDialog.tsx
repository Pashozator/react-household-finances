import React, { useEffect } from 'react';
import { EditOperationDialogProps } from './EditOperationDialog.props';
import { Dialog, DialogTitle } from '@material-ui/core';
import { OperationForm } from '../OperationForm/OperationForm';
import { useOperationForm } from '../../../hooks/budget/use-operation-form';

export const EditOperationDialog: React.FC<EditOperationDialogProps> = React.memo((props: EditOperationDialogProps) => {
	const { classes, onClose, operation, ...other } = props;
	const { initialValues, validate, patchValues } = useOperationForm();

	useEffect(() => {
		patchValues(operation);
	}, [operation, patchValues])

	const close = () => onClose();

	const submit = (values: any) => onClose({ id: operation.id, ...values });

	return (
		<Dialog onClose={close} {...other}>
			<DialogTitle>Edit operation</DialogTitle>
			<OperationForm initialValues={initialValues} validate={validate} cancel={close} submit={submit}/>
		</Dialog>
	);
});
