import { reduceDebitAction } from './budget.actions';

export const ADD_GOAL = '[Goals] Add goal';
export const EDIT_GOAL = '[Goals] Edit goal';
export const REMOVE_GOAL = '[Goals] Remove goal';
export const REALIZE_GOAL = '[Goals] Realize goal';

export const addGoalAction = goal => {
	return {
		type: ADD_GOAL,
		payload: goal
	}
};

export const editGoalAction = goal => {
	return {
		type: EDIT_GOAL,
		payload: goal
	}
};

export const removeGoalAction = goal => {
	return {
		type: REMOVE_GOAL,
		payload: goal
	}
};

export const realizeGoalAction = goal => {
	return dispatch => {
		dispatch(reduceDebitAction(goal));
		dispatch({ type: REALIZE_GOAL, payload: goal })
	}
};
