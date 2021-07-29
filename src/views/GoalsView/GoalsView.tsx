import React, { useEffect } from 'react';
import { GoalsViewProps } from './GoalsView.props';
import { useDispatch, useSelector } from 'react-redux';
import { selectGoals } from '../../store/selectors/goals.selectors';
import { selectDebit } from '../../store/selectors/budget.selectors';
import { Goal as GoalComponent } from '../../components/goals/Goal/Goal';
import { getGoalsAction, realizeGoalAction, removeGoalAction } from '../../store/actions/goals.actions';
import { openEditGoalDialogAction } from '../../store/actions/dialogs.actions';
import { Goal } from '../../domain/interfaces/goal';

export const GoalsView: React.FC<GoalsViewProps> = React.memo(() => {
	const dispatch = useDispatch();
	const goals = useSelector(selectGoals);
	const debit = useSelector(selectDebit);

	const onGoalRemove = (goal: Goal) => dispatch(removeGoalAction(goal));
	const onGoalEdit = (goal: Goal) => dispatch(openEditGoalDialogAction(goal));
	const onGoalRealize = (goal: Goal) => dispatch(realizeGoalAction(goal));
	const onGetGoals = () => dispatch(getGoalsAction());

	useEffect(() => {
		onGetGoals();
	}, []);

	return (
		<div className="wrapper padding-top-25">
			{goals.map((goal, index) => (
				<GoalComponent className="margin-top-10-not-on-first" goal={goal} debit={debit} key={index} onRemove={onGoalRemove}
					  onEdit={onGoalEdit} onRealize={onGoalRealize}/>
			))}
		</div>
	);
});
