import { Goal } from '../../domain/interfaces/goal';

export enum GoalsActions {
	GET_GOALS = '[Goals] Get Goals',
	GET_GOALS_SUCCESS = '[Goals] Get Goals success',
	GET_GOALS_FAILURE = '[Goals] Get Goals failure',
	ADD_GOAL = '[Goals] Add Goal',
	ADD_GOAL_SUCCESS = '[Goals] Add Goal success',
	ADD_GOAL_FAILURE = '[Goals] Add Goal failure',
	EDIT_GOAL = '[Goals] Edit Goal',
	EDIT_GOAL_SUCCESS = '[Goals] Edit Goal success',
	EDIT_GOAL_FAILURE = '[Goals] Edit Goal failure',
	REMOVE_GOAL = '[Goals] Remove Goal',
	REMOVE_GOAL_SUCCESS = '[Goals] Remove Goal success',
	REMOVE_GOAL_FAILURE = '[Goals] Remove Goal failure',
	REALIZE_GOAL = '[Goals] Realize Goal',
	REALIZE_GOAL_SUCCESS = '[Goals] Realize Goal success',
	REALIZE_GOAL_FAILURE = '[Goals] Realize Goal failure'
}

export const getGoalsAction = () => ({ type: GoalsActions.GET_GOALS });

export const getGoalsSuccessAction = (goals: Goal[]) => ({ type: GoalsActions.GET_GOALS_SUCCESS, payload: goals });

export const getGoalsFailureAction = () => ({ type: GoalsActions.GET_GOALS_FAILURE });

export const addGoalAction = (goal: Goal) => ({ type: GoalsActions.ADD_GOAL, payload: goal });

export const addGoalSuccessAction = (goal: Goal) => ({ type: GoalsActions.ADD_GOAL_SUCCESS, payload: goal });

export const addGoalFailureAction = () => ({ type: GoalsActions.ADD_GOAL_FAILURE });

export const editGoalAction = (goal: Goal) => ({ type: GoalsActions.EDIT_GOAL, payload: goal });

export const editGoalSuccessAction = (goal: Goal) => ({ type: GoalsActions.EDIT_GOAL_SUCCESS, payload: goal });

export const editGoalFailureAction = () => ({ type: GoalsActions.EDIT_GOAL_FAILURE });

export const removeGoalAction = (goal: Goal) => ({ type: GoalsActions.REMOVE_GOAL, payload: goal });

export const removeGoalSuccessAction = (goal: Goal) => ({ type: GoalsActions.REMOVE_GOAL_SUCCESS, payload: goal });

export const removeGoalFailureAction = () => ({ type: GoalsActions.REMOVE_GOAL_FAILURE });

export const realizeGoalAction = (goal: Goal) => ({ type: GoalsActions.REALIZE_GOAL, payload: goal });

export const realizeGoalSuccessAction = (goal: Goal) => ({ type: GoalsActions.REALIZE_GOAL_SUCCESS, payload: goal });

export const realizeGoalFailureAction = () => ({ type: GoalsActions.REALIZE_GOAL_FAILURE });
