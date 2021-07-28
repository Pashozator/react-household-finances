import React, { useEffect, useState } from 'react';
import { EditGoalDialogProps } from './EditGoalDialog.props';
import { Button, Dialog, DialogActions, DialogTitle, Input, TextField } from '@material-ui/core';

export const EditGoalDialog: React.FC<EditGoalDialogProps> = (props: EditGoalDialogProps) => {
	const { classes, onClose, goal, ...other } = props;
	const [label, setLabel] = useState('');
	const [value, setValue] = useState('');
	const [description, setDescription] = useState('');

	useEffect(() => {
		setLabel(goal.label);
		setValue(goal.value.toString());
		setDescription(goal.description);
	}, [goal]);

	const close = () => onClose();

	const submit = () => onClose({ id: goal.id, label, value, description });

	const onLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => setLabel(event.currentTarget.value);

	const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

	const onDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.currentTarget.value);

	return (
		<Dialog onClose={close} {...other}>
			<DialogTitle>Edit goal</DialogTitle>
			<div className="dialog">
				<Input name="label" inputProps={{ type: 'text' }} placeholder="Label" className="input"
					   onChange={onLabelChange} value={label}/>
				<Input name="value" inputProps={{ type: 'number' }} placeholder="Value" className="input"
					   onChange={onValueChange} value={value}/>
				<TextField name="description" inputProps={{ type: 'text' }} multiline placeholder="Description"
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
