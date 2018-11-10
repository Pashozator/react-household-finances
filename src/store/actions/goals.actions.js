import { reduceDebitAction } from './budget.actions';

export const GET_GOALS = '[Goals] Get goals';
export const GET_GOALS_SUCCESS = '[Goals] Get goals success';
export const GET_GOALS_FAILURE = '[Goals] Get goals failure';
export const ADD_GOAL = '[Goals] Add goal';
export const ADD_GOAL_SUCCESS = '[Goals] Add goal success';
export const ADD_GOAL_FAILURE = '[Goals] Add goal failure';
export const EDIT_GOAL = '[Goals] Edit goal';
export const EDIT_GOAL_SUCCESS = '[Goals] Edit goal success';
export const EDIT_GOAL_FAILURE = '[Goals] Edit goal failure';
export const REMOVE_GOAL = '[Goals] Remove goal';
export const REMOVE_GOAL_SUCCESS = '[Goals] Remove goal success';
export const REMOVE_GOAL_FAILURE = '[Goals] Remove goal failure';
export const REALIZE_GOAL = '[Goals] Realize goal';
export const REALIZE_GOAL_SUCCESS = '[Goals] Realize goal success';
export const REALIZE_GOAL_FAILURE = '[Goals] Realize goal failure';

export const getGoalsAction = () => {
	return {
		type: GET_GOALS
	}
};

export const getGoalsSuccessAction = goals => {
	return {
		type: GET_GOALS_SUCCESS,
		payload: goals
	}
};

export const getGoalsFailureAction = () => {
	return {
		type: GET_GOALS_FAILURE
	}
};

export const addGoalAction = goal => {
	return {
		type: ADD_GOAL,
		payload: goal
	}
};

export const addGoalSuccessAction = goal => {
	return {
		type: ADD_GOAL_SUCCESS,
		payload: goal
	}
};

export const addGoalFailureAction = () => {
	return {
		type: ADD_GOAL_FAILURE
	}
};

export const editGoalAction = goal => {
	return {
		type: EDIT_GOAL,
		payload: goal
	}
};

export const editGoalSuccessAction = goal => {
	return {
		type: EDIT_GOAL_SUCCESS,
		payload: goal
	}
};

export const editGoalFailureAction = () => {
	return {
		type: EDIT_GOAL_FAILURE
	}
};

export const removeGoalAction = goal => {
	return {
		type: REMOVE_GOAL,
		payload: goal
	}
};

export const removeGoalSuccessAction = goal => {
	return {
		type: REMOVE_GOAL_SUCCESS,
		payload: goal
	}
};

export const removeGoalFailureAction = () => {
	return {
		type: REMOVE_GOAL_FAILURE
	}
};

export const realizeGoalAction = goal => {
	return {
		type: REALIZE_GOAL,
		payload: goal
	}
};

export const realizeGoalSuccessAction = goal => {
	return dispatch => {
		dispatch(reduceDebitAction(goal));
		dispatch({ type: REALIZE_GOAL_SUCCESS, payload: goal })
	}
};

export const realizeGoalFailureAction = () => {
	return {
		type: REALIZE_GOAL_FAILURE
	}
};
