import { reduceDebitAction } from './budget.actions';

export const GET_GOALS = '[Goals] Get Goals';
export const GET_GOALS_SUCCESS = '[Goals] Get Goals success';
export const GET_GOALS_FAILURE = '[Goals] Get Goals failure';
export const ADD_GOAL = '[Goals] Add Goal';
export const ADD_GOAL_SUCCESS = '[Goals] Add Goal success';
export const ADD_GOAL_FAILURE = '[Goals] Add Goal failure';
export const EDIT_GOAL = '[Goals] Edit Goal';
export const EDIT_GOAL_SUCCESS = '[Goals] Edit Goal success';
export const EDIT_GOAL_FAILURE = '[Goals] Edit Goal failure';
export const REMOVE_GOAL = '[Goals] Remove Goal';
export const REMOVE_GOAL_SUCCESS = '[Goals] Remove Goal success';
export const REMOVE_GOAL_FAILURE = '[Goals] Remove Goal failure';
export const REALIZE_GOAL = '[Goals] Realize Goal';
export const REALIZE_GOAL_SUCCESS = '[Goals] Realize Goal success';
export const REALIZE_GOAL_FAILURE = '[Goals] Realize Goal failure';

export const getGoalsAction = () => ({ type: GET_GOALS });

export const getGoalsSuccessAction = goals => ({ type: GET_GOALS_SUCCESS, payload: goals });

export const getGoalsFailureAction = () => ({ type: GET_GOALS_FAILURE });

export const addGoalAction = goal => ({ type: ADD_GOAL, payload: goal });

export const addGoalSuccessAction = goal => ({ type: ADD_GOAL_SUCCESS, payload: goal });

export const addGoalFailureAction = () => ({ type: ADD_GOAL_FAILURE });

export const editGoalAction = goal => ({ type: EDIT_GOAL, payload: goal });

export const editGoalSuccessAction = goal => ({ type: EDIT_GOAL_SUCCESS, payload: goal });

export const editGoalFailureAction = () => ({ type: EDIT_GOAL_FAILURE });

export const removeGoalAction = goal => ({ type: REMOVE_GOAL, payload: goal });

export const removeGoalSuccessAction = goal => ({ type: REMOVE_GOAL_SUCCESS, payload: goal });

export const removeGoalFailureAction = () => ({ type: REMOVE_GOAL_FAILURE });

export const realizeGoalAction = goal => ({ type: REALIZE_GOAL, payload: goal });

export const realizeGoalSuccessAction = goal => {
	return dispatch => {
		dispatch(reduceDebitAction(goal));
		dispatch({ type: REALIZE_GOAL_SUCCESS, payload: goal })
	}
};

export const realizeGoalFailureAction = () => ({ type: REALIZE_GOAL_FAILURE });
