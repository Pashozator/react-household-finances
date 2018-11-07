import React from 'react';
import './Goal.scss';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography/Typography';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';
import CardActions from '@material-ui/core/CardActions/CardActions';
import Button from '@material-ui/core/Button/Button';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon/Icon';

class Goal extends React.Component {
	constructor(props) {
		super(props);
	}

	getPercentage = () => 100 - (this.props.goal.value - this.props.debit) / this.props.goal.value * 100;

	render() {
		return (
			<Card className={this.props.goal.realized ? 'realized' : null}>
				<CardContent>
					<Typography className="header" variant="h4">
						{this.props.goal.realized ? (<Icon>check_circle</Icon>) : null}
						{this.props.goal.label}
					</Typography>
					{this.props.goal.realized ? (
						<Typography variant="subtitle1" color="textSecondary">
							Cel zrealizowany
						</Typography>
					) : null}
					<p>{this.props.goal.description}</p>
					<div className="divider"/>
					<div className="numbers">
						<span>Cel {this.props.goal.value}</span>
						<span>Do osiągnięcia pozostało {this.props.goal.value - this.props.debit >= 0 ? this.props.goal.value - this.props.debit : 0}</span>
					</div>
					<LinearProgress variant="determinate" value={this.getPercentage()}/>
				</CardContent>
				{!this.props.goal.realized ? (
					<CardActions>
						<Button onClick={this.props.onRealize}
								disabled={this.props.goal.value > this.props.debit}>Realizuj</Button>
						<Button onClick={this.props.onEdit}>Edytuj</Button>
						<Button color="secondary" onClick={this.props.onRemove}>Usuń</Button>
					</CardActions>
				) : null}
			</Card>
		);
	}
}

Goal.propTypes = {
	goal: PropTypes.object.isRequired,
	debit: PropTypes.number.isRequired,
	onEdit: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
	onRealize: PropTypes.func.isRequired
};

export default Goal;
