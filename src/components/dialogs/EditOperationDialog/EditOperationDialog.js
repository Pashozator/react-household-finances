import React from 'react';
import './EditOperationDialog.scss';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import Input from '@material-ui/core/Input/Input';
import TextField from '@material-ui/core/TextField/TextField';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Button from '@material-ui/core/Button/Button';

export class EditOperationDialog extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: '',
			label: '',
			date: '',
			value: '',
			description: ''
		};
	}

	componentDidUpdate(prevProps) {
		if (this.props.operation.label !== prevProps.operation.label
			|| this.props.operation.date !== prevProps.operation.date
			|| this.props.operation.value !== prevProps.operation.value
			|| this.props.operation.description !== prevProps.operation.description
		) {
			this.setState({
				id: this.props.operation.id,
				label: this.props.operation.label,
				date: this.props.operation.date,
				value: this.props.operation.value,
				description: this.props.operation.description
			})
		}
	}

	close = () => this.props.onClose();

	submit = () => this.props.onClose(this.state);

	onTextChange = event => this.setState({ [event.target.name]: event.target.value });

	onNumberChange = event => this.setState({ [event.target.name]: parseInt(event.target.value, 10) });

	render() {
		const { classes, onClose, selectedValue, ...other } = this.props;

		return (
			<Dialog onClose={this.close} {...other}>
				<DialogTitle>Edytuj operację</DialogTitle>
				<div className="dialog">
					<Input name="label" inputProps={{ type: 'text' }} placeholder="Nazwa" className="input"
						   onChange={this.onTextChange} value={this.state.label}/>
					<Input name="date" inputProps={{ type: 'text' }} placeholder="Data" className="input"
						   onChange={this.onTextChange} value={this.state.date}/>
					<Input name="value" inputProps={{ type: 'number' }} placeholder="Kwota" className="input"
						   onChange={this.onNumberChange} value={this.state.value}/>
					<TextField name="description" type="text" multiline placeholder="Opis"
							   className="input" onChange={this.onTextChange} value={this.state.description}/>
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
