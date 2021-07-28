import React, { useState } from 'react';
import './AddGoalDialog.scss';
import { Button, Dialog, DialogActions, DialogTitle, Input, TextField } from '@material-ui/core';
import { AddGoalDialogProps } from './AddGoalDialog.props';

export const AddGoalDialog: React.FC<AddGoalDialogProps> = (props: AddGoalDialogProps) => {
	const { classes, onClose, ...other } = props;
	const [label, setLabel] = useState('');
	const [value, setValue] = useState('');
	const [description, setDescription] = useState('');

	const close = () => onClose();

	const submit = () => onClose({ label, value, description });

	const onLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => setLabel(event.currentTarget.value);

	const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

	const onDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.currentTarget.value);

	return (
		<Dialog onClose={close} {...other}>
			<DialogTitle>Add goal</DialogTitle>
			<div className="dialog">
				<Input name="label" inputProps={{ type: 'text' }} placeholder="Label" className="input"
					   onChange={onLabelChange}/>
				<Input name="value" inputProps={{ type: 'number' }} placeholder="Value" className="input"
					   onChange={onValueChange}/>
				<TextField name="description" inputProps={{ type: 'text' }} multiline placeholder="Description"
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
