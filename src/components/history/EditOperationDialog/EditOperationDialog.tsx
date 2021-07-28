import React, { useEffect, useState } from 'react';
import { EditOperationDialogProps } from './EditOperationDialog.props';
import { Button, Dialog, DialogActions, DialogTitle, Input, TextField } from '@material-ui/core';

export const EditOperationDialog: React.FC<EditOperationDialogProps> = (props: EditOperationDialogProps) => {
	const { classes, onClose, operation, ...other } = props;
	const [label, setLabel] = useState('');
	const [date, setDate] = useState('');
	const [value, setValue] = useState('');
	const [description, setDescription] = useState('');

	useEffect(() => {
		setLabel(operation.label);
		setDate(operation.date);
		setValue(operation.value.toString());
		setDescription(operation.description);
	}, [operation])

	const close = () => onClose();

	const submit = () => onClose({ id: operation.id, label, date, value, description });

	const onLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => setLabel(event.currentTarget.value);

	const onDateChange = (event: React.ChangeEvent<HTMLInputElement>) => setDate(event.currentTarget.value);

	const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

	const onDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.currentTarget.value);

	return (
		<Dialog onClose={close} {...other}>
			<DialogTitle>Edit operation</DialogTitle>
			<div className="dialog">
				<Input name="label" inputProps={{ type: 'text' }} placeholder="Label" className="input"
					   onChange={onLabelChange} value={label}/>
				<Input name="date" inputProps={{ type: 'text' }} placeholder="Date" className="input"
					   onChange={onDateChange} value={date}/>
				<Input name="value" inputProps={{ type: 'number' }} placeholder="Value" className="input"
					   onChange={onValueChange} value={value}/>
				<TextField name="description" type="text" multiline placeholder="Description"
						   className="input" onChange={onDescriptionChange} value={description}/>
			</div>
			<DialogActions>
				<Button onClick={close} color="primary">
					Cancel
				</Button>
				<Button onClick={submit} color="primary" variant="contained">
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
}
