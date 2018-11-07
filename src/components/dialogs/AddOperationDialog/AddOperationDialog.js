import React from 'react';
import './AddOperationDialog.scss';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

export class AddOperationDialog extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			label: null,
			date: null,
			value: null,
			description: null
		};
	}

	close = () => this.props.onClose();

	submit = () => this.props.onClose(this.state);

	onTextChange = event => this.setState({ [event.target.name]: event.target.value });

	onNumberChange = event => this.setState({ [event.target.name]: parseInt(event.target.value, 10) });

	render() {
		const { classes, onClose, selectedValue, ...other } = this.props;

		return (
			<Dialog onClose={this.close} {...other}>
				<DialogTitle>Dodaj operację</DialogTitle>
				<div className="dialog">
					<Input name="label" inputProps={{ type: 'text' }} placeholder="Nazwa" className="input"
						   onChange={this.onTextChange}/>
					<Input name="date" inputProps={{ type: 'text' }} placeholder="Data" className="input"
						   onChange={this.onTextChange}/>
					<Input name="value" inputProps={{ type: 'number' }} placeholder="Kwota" className="input"
						   onChange={this.onNumberChange}/>
					<TextField name="description" type="text" required={true} multiline placeholder="Opis"
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
