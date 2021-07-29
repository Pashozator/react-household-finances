import React from 'react';
import { GoalProps } from './Goal.props';
import { Button, Card, CardActions, CardContent, Icon, LinearProgress, Typography } from '@material-ui/core';

export const Goal: React.FC<GoalProps> = (props: GoalProps) => {
	const { className, goal, debit, onRemove, onEdit, onRealize } = props;

	const getPercentage = () => 100 - (goal.value - debit) / goal.value * 100;

	const remove = () => onRemove(goal);

	const edit = () => onEdit(goal);

	const realize = () => onRealize(goal);

	return (
		<Card className={`${className} ${goal.realized ? 'realized' : ''}`}>
			<CardContent>
				<Typography className="header" variant="h4">
					{goal.realized ? (<Icon>check_circle</Icon>) : null}
					{goal.label}
				</Typography>
				{goal.realized ? (
					<Typography variant="subtitle1" color="textSecondary">
						Goal realized
					</Typography>
				) : null}
				<p>{goal.description}</p>
				<div className="divider"/>
				<div className="numbers">
					<span>Goal {goal.value}</span>
					<span>Left to achieve {goal.value - debit >= 0 ? goal.value - debit : 0}</span>
				</div>
				<LinearProgress variant="determinate" value={getPercentage()}/>
			</CardContent>
			{!goal.realized ? (
				<CardActions>
					<Button onClick={realize}
							disabled={goal.value > debit}>Realize</Button>
					<Button onClick={edit}>Edit</Button>
					<Button color="secondary" onClick={remove}>Delete</Button>
				</CardActions>
			) : null}
		</Card>
	);
}
