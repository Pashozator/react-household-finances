import React from 'react';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardActions from '@material-ui/core/CardActions/CardActions';
import Button from '@material-ui/core/Button/Button';
import './Operation.scss';
import PropTypes from 'prop-types';

class Operation extends React.Component {
	constructor(props) {
		super(props);
	}

	remove = () => this.props.onRemove(this.props.operation);

	edit = () => this.props.onEdit(this.props.operation);

	render() {
		return (
			<Card>
				<CardContent>
					<div className="content">
						<div className="label-date">
							<span className="date">{this.props.operation.date}</span>
							<span className="label">{this.props.operation.label}</span>
						</div>
						<span className="value">{this.props.operation.value}</span>
					</div>
					<div className="description">
						<p>{this.props.operation.description}</p>
					</div>
				</CardContent>
				<CardActions>
					<Button color="secondary" onClick={this.remove}>Usuń</Button>
					<Button onClick={this.edit}>Edytuj</Button>
				</CardActions>
			</Card>
		);
	}
}

Operation.propTypes = {
	operation: PropTypes.object.isRequired,
	onRemove: PropTypes.func.isRequired,
	onEdit: PropTypes.func.isRequired
};

export default Operation;
