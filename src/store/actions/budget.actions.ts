import { Budget } from '../../domain/interfaces/budget';
import { Operation } from '../../domain/interfaces/operation';
import { Goal } from '../../domain/interfaces/goal';

export enum BudgetActions {
	GET_BUDGET = '[Budget] Get budget',
	GET_BUDGET_SUCCESS = '[Budget] Get budget success',
	GET_BUDGET_FAILURE = '[Budget] Get budget failure',
	ADD_OPERATION = '[Budget] Add Operation',
	ADD_OPERATION_SUCCESS = '[Budget] Add Operation success',
	ADD_OPERATION_FAILURE = '[Budget] Add Operation failure',
	EDIT_OPERATION = '[Budget] Edit Operation',
	EDIT_OPERATION_SUCCESS = '[Budget] Edit Operation success',
	EDIT_OPERATION_FAILURE = '[Budget] Edit Operation failure',
	REMOVE_OPERATION = '[Budget] Remove Operation',
	REMOVE_OPERATION_SUCCESS = '[Budget] Remove Operation success',
	REMOVE_OPERATION_FAILURE = '[Budget] Remove Operation failure',
	REDUCE_DEBIT = '[Budget] Reduce debit'
}

export const getBudgetAction = () => ({ type: BudgetActions.GET_BUDGET });

export const getBudgetSuccess = (budget: Budget) => ({ type: BudgetActions.GET_BUDGET_SUCCESS, payload: budget });

export const getBudgetFailure = () => ({ type: BudgetActions.GET_BUDGET_FAILURE });

export const addOperationAction = (operation: Operation) => ({ type: BudgetActions.ADD_OPERATION, payload: operation });

export const addOperationSuccessAction = (operation: Operation) => ({ type: BudgetActions.ADD_OPERATION_SUCCESS, payload: operation });

export const addOperationFailureAction = () => ({ type: BudgetActions.ADD_OPERATION_FAILURE });

export const editOperationAction = (operation: Operation) => ({ type: BudgetActions.EDIT_OPERATION, payload: operation });

export const editOperationSuccessAction = (operation: Operation) => ({ type: BudgetActions.EDIT_OPERATION_SUCCESS, payload: operation });

export const editOperationFailureAction = () => ({ type: BudgetActions.EDIT_OPERATION_FAILURE });

export const removeOperationAction = (operation: Operation) => ({ type: BudgetActions.REMOVE_OPERATION, payload: operation });

export const removeOperationSuccessAction = (operation: Operation) => ({ type: BudgetActions.REMOVE_OPERATION_SUCCESS, payload: operation });

export const removeOperationFailureAction = () => ({ type: BudgetActions.REMOVE_OPERATION_FAILURE });

export const reduceDebitAction = (goal: Goal) => ({ type: BudgetActions.REDUCE_DEBIT, payload: goal });