import * as GoalsActions from '../actions/goals.actions';
import { fromJS } from 'immutable';
import { guid } from '../../utils/guid-util';

const initialState = fromJS([]);

export function goalsReducer(state = initialState, action) {
	switch (action.type) {
		case GoalsActions.GET_GOALS: {
			return state;
		}
		case GoalsActions.GET_GOALS_SUCCESS: {
			return fromJS(action.payload);
		}
		case GoalsActions.GET_GOALS_FAILURE: {
			return state;
		}
		case GoalsActions.ADD_GOAL: {
			return state;
		}
		case GoalsActions.ADD_GOAL_SUCCESS: {
			action.payload.id = guid();
			action.payload.realized = false;

			return state.insert(null, fromJS(action.payload));
		}
		case GoalsActions.ADD_GOAL_FAILURE: {
			return state;
		}
		case GoalsActions.EDIT_GOAL: {
			return state;
		}
		case GoalsActions.EDIT_GOAL_SUCCESS: {
			const index = state.findIndex(goal => goal.get('id') === action.payload.id);

			return state.update(index, () => fromJS(action.payload));
		}
		case GoalsActions.EDIT_GOAL_FAILURE: {
			return state;
		}
		case GoalsActions.REMOVE_GOAL: {
			return state;
		}
		case GoalsActions.REMOVE_GOAL_SUCCESS: {
			return state.filter(goal => goal.get('id') !== action.payload.id);
		}
		case GoalsActions.REMOVE_GOAL_FAILURE: {
			return state;
		}
		case GoalsActions.REALIZE_GOAL: {
			return state;
		}
		case GoalsActions.REALIZE_GOAL_SUCCESS: {
			const index = state.findIndex(goal => goal.get('id') === action.payload.id);

			return state.updateIn([index, 'realized'], () => true);
		}
		case GoalsActions.REALIZE_GOAL_FAILURE: {
			return state;
		}
		default:
			return state;
	}
}
