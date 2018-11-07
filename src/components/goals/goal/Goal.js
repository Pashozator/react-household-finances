import React from 'react';
import './Goal.scss';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography/Typography';
import Divider from '@material-ui/core/Divider/Divider';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';
import CardActions from '@material-ui/core/CardActions/CardActions';
import Button from '@material-ui/core/Button/Button';
import PropTypes from 'prop-types';

class Goal extends React.Component {
	constructor(props) {
		super(props);
	}

	getPercentage = () => 100 - (this.props.goal.value - this.props.debit) / this.props.goal.value * 100;

	render() {
		return (
			<Card>
				<CardContent>
					<Typography variant="h4">
						{this.props.goal.label}
					</Typography>
					<p>{this.props.goal.description}</p>
					<div className="divider" />
					<div className="numbers">
						<span>Cel {this.props.goal.value}</span>
						<span>Do osiągnięcia pozostało {this.props.goal.value - this.props.debit >= 0 ? this.props.goal.value - this.props.debit : 0}</span>
					</div>
					<LinearProgress variant="determinate" value={this.getPercentage()}/>
				</CardContent>
				<CardActions>
					<Button disabled>Realizuj</Button>
					<Button>Edytuj</Button>
					<Button color="secondary">Usuń</Button>
				</CardActions>
			</Card>
		);
	}
}

Goal.propTypes = {
	goal: PropTypes.object.isRequired,
	debit: PropTypes.number.isRequired
};

export default Goal;
