import { Goal } from '../../../domain/interfaces/goal';
import { ActionWithPayload } from '../../interfaces/action-with-payload.interface';
import { GoalsActions } from '../../actions/goals.actions';
import { Action } from 'redux';

export const goalsInitialState: Goal[] = [];

export function goalsReducer(state = goalsInitialState, action: Action | ActionWithPayload<Goal | Goal[]>): Goal[] {
	switch (action.type) {
		case GoalsActions.GET_GOALS: {
			return state;
		}
		case GoalsActions.GET_GOALS_SUCCESS: {
			return (action as ActionWithPayload<Goal[]>).payload;
		}
		case GoalsActions.GET_GOALS_FAILURE: {
			return state;
		}
		case GoalsActions.CREATE_GOAL: {
			return state;
		}
		case GoalsActions.CREATE_GOAL_SUCCESS: {
			const goal: Goal = (action as ActionWithPayload<Goal>).payload;
			return [...state, goal];
		}
		case GoalsActions.CREATE_GOAL_FAILURE: {
			return state;
		}
		case GoalsActions.UPDATE_GOAL: {
			return state;
		}
		case GoalsActions.UPDATE_GOAL_SUCCESS: {
			const goals = [...state];
			const goal: Goal = (action as ActionWithPayload<Goal>).payload;
			const index = goals.findIndex(_goal => _goal.id === goal.id);

			goals[index] = goal;
			return goals;
		}
		case GoalsActions.UPDATE_GOAL_FAILURE: {
			return state;
		}
		case GoalsActions.REMOVE_GOAL: {
			return state;
		}
		case GoalsActions.REMOVE_GOAL_SUCCESS: {
			const goal: Goal = (action as ActionWithPayload<Goal>).payload;
			return state.filter(_goal => _goal.id !== goal.id);
		}
		case GoalsActions.REMOVE_GOAL_FAILURE: {
			return state;
		}
		case GoalsActions.REALIZE_GOAL: {
			return state;
		}
		case GoalsActions.REALIZE_GOAL_SUCCESS: {
			const goals = [...state];
			const goal: Goal = (action as ActionWithPayload<Goal>).payload;
			const index = goals.findIndex(_goal => _goal.id === goal.id);

			goals[index] = { ...goals[index], realized: true };
			return goals;
		}
		case GoalsActions.REALIZE_GOAL_FAILURE: {
			return state;
		}
		default:
			return state;
	}
}
