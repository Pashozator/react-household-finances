import React from 'react';
import './AddGoalDialog.scss';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import Input from '@material-ui/core/Input/Input';
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button/Button';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';

export class AddGoalDialog extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			amount: '',
			description: ''
		};
	}

	close = () => this.props.onClose();

	render() {
		const { classes, onClose, selectedValue, ...other } = this.props;

		return (
			<Dialog onClose={this.close} {...other}>
				<DialogTitle>Dodaj cel</DialogTitle>
				<div className="dialog">
					<Input placeholder="Nazwa" className="input"/>
					<Input placeholder="Kwota" className="input"/>
					<TextField multiline placeholder="Opis" className="input"/>
				</div>
				<DialogActions>
					<Button onClick={this.close} color="primary">
						Anuluj
					</Button>
					<Button onClick={this.close} color="primary" variant="contained">
						Zapisz
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}
