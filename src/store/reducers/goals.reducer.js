import * as GoalsActions from '../actions/goals.actions';

const initialState = [];

export function goalsReducer(state = initialState, action) {
	switch (action.type) {
		case GoalsActions.ADD_GOAL: {
			return [action.payload, ...state];
		}
		case GoalsActions.EDIT_GOAL: {
			const goals = [...state],
				index = goals.findIndex(goal => goal.id === action.payload.id);

			goals[index] = action.payload;

			return goals;
		}
		case GoalsActions.REMOVE_GOAL: {
			return [...state.filter(goal => goal.id !== action.payload.id)];
		}
		case GoalsActions.REALIZE_GOAL: {
			const goals = [...state],
				index = goals.findIndex(_goal => _goal.id === action.payload.id);

			goals[index].realized = true;

			return goals;
		}
		default:
			return state;
	}
}
