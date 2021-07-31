import React, { useEffect } from 'react';
import { UpdateOperationDialogProps } from './UpdateOperationDialog.props';
import { Dialog, DialogTitle } from '@material-ui/core';
import { OperationForm } from '../OperationForm/OperationForm';
import { useOperationForm } from '../../../hooks/budget/use-operation-form';
import { OperationFormValues } from '../../../interfaces/operation-form-values';
import { Operation } from '../../../domain/interfaces/operation';

export const UpdateOperationDialog: React.FC<UpdateOperationDialogProps> = React.memo((props: UpdateOperationDialogProps) => {
	const { open, onClose, onSubmit, operation } = props;
	const { initialValues, validate, patchValues } = useOperationForm();

	useEffect(() => {
		patchValues(operation);
	}, [operation, patchValues])

	const close = () => onClose();

	const submit = (values: OperationFormValues) => {
		if (Object.keys(validate(values)).length) {
			return;
		}

		onSubmit({ id: operation.id, ...values } as Operation);
	}

	return (
		<Dialog onClose={close} open={open}>
			<DialogTitle>Edit operation</DialogTitle>
			<OperationForm initialValues={initialValues} validate={validate} cancel={close} submit={submit}/>
		</Dialog>
	);
});
