import React from 'react';
import { AuthorDialogProps } from './AuthorDialog.props';
import { Button, Dialog, DialogTitle } from '@material-ui/core';
import Avatar from '../../../assets/fav.png';

export const AuthorDialog: React.FC<AuthorDialogProps> = (props: AuthorDialogProps) => {
	const { classes, onClose, ...other } = props;

	const close = () => onClose();

	return (
		<Dialog onClose={close} {...other}>
			<DialogTitle style={{ textAlign: 'center' }}>Wojciech Szućko</DialogTitle>
			<div className="dialog">
				<img src={Avatar} alt="Wojciech Szućko"/>
				<p>Based in Warsaw</p>
				<Button className="button-to-github">
					<a href="https://github.com/Pashozator">Github</a>
				</Button>
			</div>
		</Dialog>
	)
}
