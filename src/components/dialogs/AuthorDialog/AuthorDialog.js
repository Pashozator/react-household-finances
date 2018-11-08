import React from 'react';
import './AuthorDialog.scss';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import Avatar from '../../../assets/fav.png';
import Button from '@material-ui/core/Button/Button';

export class AuthorDialog extends React.Component {
	close = () => this.props.onClose();

	render() {
		const { classes, onClose, selectedValue, ...other } = this.props;

		return (
			<Dialog onClose={this.close} {...other}>
				<DialogTitle style={{ textAlign: 'center' }}>Wojciech Szućko</DialogTitle>
				<div className="dialog">
					<img src={Avatar} alt="Wojciech Szućko"/>
					<p>Based in Wrocław</p>
					<Button className="button-to-github">
						<a href="https://github.com/Pashozator">Github</a>
					</Button>
				</div>
			</Dialog>
		);
	}
}
