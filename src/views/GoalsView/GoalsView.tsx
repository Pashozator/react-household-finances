import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectGoals } from '../../store/selectors/goals/goals.selectors';
import { selectDebit } from '../../store/selectors/budget/budget.selectors';
import { Goal as GoalComponent } from '../../components/goals/Goal/Goal';
import { getGoalsAction, realizeGoalAction, removeGoalAction } from '../../store/actions/goals.actions';
import { openCreateGoalDialogAction, openUpdateGoalDialogAction } from '../../store/actions/dialogs.actions';
import { Goal } from '../../domain/interfaces/goal';
import { Fab, Icon } from '@material-ui/core';

export const GoalsView: React.FC = React.memo(() => {
	const dispatch = useDispatch();
	const goals = useSelector(selectGoals);
	const debit = useSelector(selectDebit);

	const openAddGoalDialog = () => dispatch(openCreateGoalDialogAction());

	const onGoalRemove = (goal: Goal) => dispatch(removeGoalAction(goal));

	const onGoalEdit = (goal: Goal) => dispatch(openUpdateGoalDialogAction(goal));

	const onGoalRealize = (goal: Goal) => dispatch(realizeGoalAction(goal));

	const onGetGoals = () => dispatch(getGoalsAction());

	useEffect(() => {
		onGetGoals();
	}, []);

	return (
		<div className="wrapper padding-top-25">
			{goals.map(goal => (
				<GoalComponent className="margin-top-10-not-on-first" goal={goal} debit={debit} key={goal.id}
							   onRemove={onGoalRemove}
							   onUpdate={onGoalEdit} onRealize={onGoalRealize}/>
			))}

			<Fab color="primary" className="fab" onClick={openAddGoalDialog}>
				<Icon>
					add_circle
				</Icon>
			</Fab>
		</div>
	);
});
