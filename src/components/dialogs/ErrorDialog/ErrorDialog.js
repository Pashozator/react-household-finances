import React from 'react';
import './ErrorDialog.scss';
import Dialog from '@material-ui/core/Dialog/Dialog';
import Button from '@material-ui/core/Button/Button';

export class ErrorDialog extends React.Component {
	close = () => this.props.onClose();

	render() {
		const { classes, onClose, selectedValue, ...other } = this.props;

		return (
			<Dialog onClose={this.close} {...other}>
				<div className="dialog">
					<p>Wystąpił nieoczekiwany błąd</p>
					<Button onClick={this.close}>
						Zamknij
					</Button>
				</div>
			</Dialog>
		);
	}
}
