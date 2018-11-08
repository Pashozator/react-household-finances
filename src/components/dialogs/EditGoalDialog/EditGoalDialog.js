import React from 'react';
import './EditGoalDialog.scss';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import Input from '@material-ui/core/Input/Input';
import TextField from '@material-ui/core/TextField/TextField';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Button from '@material-ui/core/Button/Button';

export class EditGoalDialog extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: null,
			label: '',
			value: '',
			description: ''
		};
	}

	componentDidUpdate(prevProps) {
		if (this.props.goal.label !== prevProps.goal.label
			|| this.props.goal.value !== prevProps.goal.value
			|| this.props.goal.description !== prevProps.goal.description
		) {
			this.setState({
				id: this.props.goal.id,
				label: this.props.goal.label,
				value: this.props.goal.value,
				description: this.props.goal.description
			})
		}
	}

	close = () => this.props.onClose();

	submit = () => this.props.onClose(this.state);

	onTextChange = event => this.setState({ [event.target.name]: event.target.value });

	onNumberChange = event => this.setState({ [event.target.name]: event.target.value });

	render() {
		const { classes, onClose, selectedValue, ...other } = this.props;

		return (
			<Dialog onClose={this.close} {...other}>
				<DialogTitle>Edytuj cel</DialogTitle>
				<div className="dialog">
					<Input name="label" inputProps={{ type: 'text' }} placeholder="Nazwa" className="input"
						   onChange={this.onTextChange} value={this.state.label}/>
					<Input name="value" inputProps={{ type: 'number' }} placeholder="Kwota" className="input"
						   onChange={this.onNumberChange} value={this.state.value}/>
					<TextField name="description" inputProps={{ type: 'text' }} multiline placeholder="Opis"
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
