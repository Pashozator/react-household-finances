import React, { useState } from 'react';
import { AddOperationDialogProps } from './AddOperationDialog.props';
import { Button, Dialog, DialogActions, DialogTitle, Input, TextField } from '@material-ui/core';

export const AddOperationDialog: React.FC<AddOperationDialogProps> = (props: AddOperationDialogProps) => {
	const { classes, onClose, ...other } = props;
	const [label, setLabel] = useState('');
	const [date, setDate] = useState('');
	const [value, setValue] = useState('');
	const [description, setDescription] = useState('');

	const close = () => onClose();

	const submit = () => onClose({ label, date, value, description });

	const onLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => setLabel(event.currentTarget.value);

	const onDateChange = (event: React.ChangeEvent<HTMLInputElement>) => setDate(event.currentTarget.value);

	const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

	const onDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.currentTarget.value);

	return (
		<Dialog onClose={close} {...other}>
			<DialogTitle>Add operation</DialogTitle>
			<div className="dialog">
				<Input name="label" inputProps={{ type: 'text' }} placeholder="Label" className="input"
					   onChange={onLabelChange}/>
				<Input name="date" inputProps={{ type: 'text' }} placeholder="Date" className="input"
					   onChange={onDateChange}/>
				<Input name="value" inputProps={{ type: 'number' }} placeholder="Value" className="input"
					   onChange={onValueChange}/>
				<TextField name="description" type="text" multiline placeholder="Description"
						   className="input" onChange={onDescriptionChange}/>
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
