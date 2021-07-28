import React from 'react';
import { ErrorDialogProps } from './ErrorDialog.props';
import { Button, Dialog } from '@material-ui/core';

export const ErrorDialog: React.FC<ErrorDialogProps> = (props: ErrorDialogProps) => {
	const { classes, onClose, ...other } = props;

	const close = () => onClose();

	return (
		<Dialog onClose={close} {...other}>
			<div className="dialog">
				<p>Error occurs</p>
				<Button onClick={close}>
					Close
				</Button>
			</div>
		</Dialog>
	);
}

