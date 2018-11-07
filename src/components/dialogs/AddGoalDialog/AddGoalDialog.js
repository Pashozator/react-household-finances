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
			label: '',
			value: '',
			description: ''
		};
	}

	close = () => this.props.onClose();

	submit = () => this.props.onClose(this.state);

	onTextChange = event => this.setState({ [event.target.name]: event.target.value });

	onNumberChange = event => this.setState({ [event.target.name]: event.target.value });

	render() {
		const { classes, onClose, selectedValue, ...other } = this.props;

		return (
			<Dialog onClose={this.close} {...other}>
				<DialogTitle>Dodaj cel</DialogTitle>
				<div className="dialog">
					<Input name="label" inputProps={{ type: 'text' }} placeholder="Nazwa" className="input"
						   onChange={this.onTextChange}/>
					<Input name="value" inputProps={{ type: 'text' }} placeholder="Kwota" className="input"
						   onChange={this.onNumberChange}/>
					<TextField name="description" inputProps={{ type: 'number' }} multiline placeholder="Opis"
							   className="input" onChange={this.onTextChange}/>
				</div>
				<DialogActions>
					<Button onClick={this.close} color="primary">
						Anuluj
					</Button>
					<Button onClick={this.submit} color="primary" variant="contained">
						Zapisz
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}
