import React from 'react';
import './Goal.scss';
import { GoalProps } from './Goal.props';
import { Button, Card, CardActions, CardContent, Icon, LinearProgress, Typography } from '@material-ui/core';
import { GoalElementsTestIds } from './Goal.helper';

export const Goal: React.FC<GoalProps> = React.memo((props: GoalProps) => {
	const { className, goal, debit, onRemove, onUpdate, onRealize } = props;

	const getPercentage = () => 100 - (goal.value - debit) / goal.value * 100;

	const remove = () => onRemove(goal);

	const update = () => onUpdate(goal);

	const realize = () => onRealize(goal);

	return (
		<Card data-testid={GoalElementsTestIds.ROOT} className={`${className} ${goal.realized ? 'realized' : ''}`}>
			<CardContent>
				<Typography className="header" variant="h4">
					{goal.realized ? (<Icon data-testid={GoalElementsTestIds.ICON}>check_circle</Icon>) : null}
					<span data-testid={GoalElementsTestIds.LABEL}>{goal.label}</span>
				</Typography>
				{goal.realized ? (
					<Typography variant="subtitle1" color="textSecondary" data-testid={GoalElementsTestIds.REALIZED_LABEL}>
						Goal realized
					</Typography>
				) : null}
				<p data-testid={GoalElementsTestIds.DESCRIPTION}>{goal.description}</p>
				<div className="divider"/>
				<div className="numbers">
					<span>Goal <span data-testid={GoalElementsTestIds.VALUE}>{goal.value}</span></span>
					<span>Left to achieve <span data-testid={GoalElementsTestIds.VALUE_LEFT_TO_ACHIEVE}>{goal.value - debit >= 0 ? goal.value - debit : 0}</span></span>
				</div>
				<LinearProgress variant="determinate" value={getPercentage()}/>
			</CardContent>
			{!goal.realized ? (
				<CardActions>
					<Button onClick={realize}
							disabled={goal.value > debit} data-testid={GoalElementsTestIds.REALIZE_BUTTON}>Realize</Button>
					<Button onClick={update} data-testid={GoalElementsTestIds.UPDATE_BUTTON}>Update</Button>
					<Button color="secondary" onClick={remove} data-testid={GoalElementsTestIds.REMOVE_BUTTON}>Remove</Button>
				</CardActions>
			) : null}
		</Card>
	);
});
