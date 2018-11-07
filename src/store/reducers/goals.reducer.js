import * as GoalsActions from '../actions/goals.actions';
import { guid } from '../../utils/guid-util';

const initialState = [
	{
		id: guid(),
		label: 'iMac',
		description: 'Sed iaculis pharetra vehicula. Quisque vel mattis quam. Nullam vitae interdum massa. Quisque laoreet porta molestie. Nunc hendrerit rhoncus orci et interdum. Aenean vitae massa consequat, lobortis purus id, tristique eros. Aliquam ultricies nibh sed tellus tempor mattis.',
		value: 8000,
		realized: false
	}
];

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
