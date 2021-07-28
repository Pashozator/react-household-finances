import { Goal } from '../../domain/interfaces/goal';
import { ActionWithPayload } from '../interfaces/action-with-payload.interface';
import { GoalsActions } from '../actions/goals.actions';
import { v4 as uuid } from 'uuid';

export const goalsInitialState: Goal[] = [];

export function goalsReducer(state = goalsInitialState, action: ActionWithPayload<GoalsActions>): Goal[] {
	switch (action.type) {
		case GoalsActions.GET_GOALS: {
			return state;
		}
		case GoalsActions.GET_GOALS_SUCCESS: {
			return action.payload;
		}
		case GoalsActions.GET_GOALS_FAILURE: {
			return state;
		}
		case GoalsActions.ADD_GOAL: {
			return state;
		}
		case GoalsActions.ADD_GOAL_SUCCESS: {
			action.payload.id = uuid();
			action.payload.realized = false;

			return [action.payload, ...state];
		}
		case GoalsActions.ADD_GOAL_FAILURE: {
			return state;
		}
		case GoalsActions.EDIT_GOAL: {
			return state;
		}
		case GoalsActions.EDIT_GOAL_SUCCESS: {
			const goals = [...state];
			const index = goals.findIndex(goal => goal.id === action.payload.id);

			goals[index] = action.payload;
			return goals;
		}
		case GoalsActions.EDIT_GOAL_FAILURE: {
			return state;
		}
		case GoalsActions.REMOVE_GOAL: {
			return state;
		}
		case GoalsActions.REMOVE_GOAL_SUCCESS: {
			return state.filter(goal => goal.id !== action.payload.id);
		}
		case GoalsActions.REMOVE_GOAL_FAILURE: {
			return state;
		}
		case GoalsActions.REALIZE_GOAL: {
			return state;
		}
		case GoalsActions.REALIZE_GOAL_SUCCESS: {
			const goals = [...state];
			const index = goals.findIndex(goal => goal.id === action.payload.id);

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
