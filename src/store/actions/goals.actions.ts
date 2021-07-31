import { Goal } from '../../domain/interfaces/goal';

export enum GoalsActions {
	GET_GOALS = '[Goals] Get goals',
	GET_GOALS_SUCCESS = '[Goals] Get goals success',
	GET_GOALS_FAILURE = '[Goals] Get goals failure',
	CREATE_GOAL = '[Goals] Create goal',
	CREATE_GOAL_SUCCESS = '[Goals] Create goal success',
	CREATE_GOAL_FAILURE = '[Goals] Create goal failure',
	UPDATE_GOAL = '[Goals] Update goal',
	UPDATE_GOAL_SUCCESS = '[Goals] Update goal success',
	UPDATE_GOAL_FAILURE = '[Goals] Update goal failure',
	REMOVE_GOAL = '[Goals] Remove goal',
	REMOVE_GOAL_SUCCESS = '[Goals] Remove goal success',
	REMOVE_GOAL_FAILURE = '[Goals] Remove goal failure',
	REALIZE_GOAL = '[Goals] Realize goal',
	REALIZE_GOAL_SUCCESS = '[Goals] Realize goal success',
	REALIZE_GOAL_FAILURE = '[Goals] Realize goal failure'
}

export const getGoalsAction = () => ({ type: GoalsActions.GET_GOALS });

export const getGoalsSuccessAction = (goals: Goal[]) => ({ type: GoalsActions.GET_GOALS_SUCCESS, payload: goals });

export const getGoalsFailureAction = () => ({ type: GoalsActions.GET_GOALS_FAILURE });

export const createGoalAction = (goal: Goal) => ({ type: GoalsActions.CREATE_GOAL, payload: goal });

export const createGoalSuccessAction = (goal: Goal) => ({ type: GoalsActions.CREATE_GOAL_SUCCESS, payload: goal });

export const createGoalFailureAction = () => ({ type: GoalsActions.CREATE_GOAL_FAILURE });

export const updateGoalAction = (goal: Goal) => ({ type: GoalsActions.UPDATE_GOAL, payload: goal });

export const updateGoalSuccessAction = (goal: Goal) => ({ type: GoalsActions.UPDATE_GOAL_SUCCESS, payload: goal });

export const updateGoalFailureAction = () => ({ type: GoalsActions.UPDATE_GOAL_FAILURE });

export const removeGoalAction = (goal: Goal) => ({ type: GoalsActions.REMOVE_GOAL, payload: goal });

export const removeGoalSuccessAction = (goal: Goal) => ({ type: GoalsActions.REMOVE_GOAL_SUCCESS, payload: goal });

export const removeGoalFailureAction = () => ({ type: GoalsActions.REMOVE_GOAL_FAILURE });

export const realizeGoalAction = (goal: Goal) => ({ type: GoalsActions.REALIZE_GOAL, payload: goal });

export const realizeGoalSuccessAction = (goal: Goal) => ({ type: GoalsActions.REALIZE_GOAL_SUCCESS, payload: goal });

export const realizeGoalFailureAction = () => ({ type: GoalsActions.REALIZE_GOAL_FAILURE });
