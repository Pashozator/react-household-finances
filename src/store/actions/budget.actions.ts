import { Budget } from '../../domain/interfaces/budget';
import { Operation } from '../../domain/interfaces/operation';
import { CreateOperationEndpointRequestBody } from '../../domain/endpoints/budget/create-operation.endpoint';
import { UpdateOperationEndpointRequestBody } from '../../domain/endpoints/budget/update-operation.endpoint';

export enum BudgetActions {
	GET_BUDGET = '[Budget] Get budget',
	GET_BUDGET_SUCCESS = '[Budget] Get budget success',
	GET_BUDGET_FAILURE = '[Budget] Get budget failure',
	CREATE_OPERATION = '[Budget] Create operation',
	CREATE_OPERATION_SUCCESS = '[Budget] Create operation success',
	CREATE_OPERATION_FAILURE = '[Budget] Create operation failure',
	UPDATE_OPERATION = '[Budget] Update operation',
	UPDATE_OPERATION_SUCCESS = '[Budget] Update operation success',
	UPDATE_OPERATION_FAILURE = '[Budget] Update operation failure',
	REMOVE_OPERATION = '[Budget] Remove operation',
	REMOVE_OPERATION_SUCCESS = '[Budget] Remove operation success',
	REMOVE_OPERATION_FAILURE = '[Budget] Remove operation failure',
}

export const getBudgetAction = () => ({ type: BudgetActions.GET_BUDGET });

export const getBudgetSuccessAction = (budget: Budget) => ({ type: BudgetActions.GET_BUDGET_SUCCESS, payload: budget });

export const getBudgetFailureAction = () => ({ type: BudgetActions.GET_BUDGET_FAILURE });

export const createOperationAction = (createOperationRequestBody: CreateOperationEndpointRequestBody) => ({ type: BudgetActions.CREATE_OPERATION, payload: createOperationRequestBody });

export const createOperationSuccessAction = (operation: Operation) => ({ type: BudgetActions.CREATE_OPERATION_SUCCESS, payload: operation });

export const createOperationFailureAction = () => ({ type: BudgetActions.CREATE_OPERATION_FAILURE });

export const updateOperationAction = (payload: { id: string, updateOperationRequestBody: UpdateOperationEndpointRequestBody }) => ({ type: BudgetActions.UPDATE_OPERATION, payload });

export const updateOperationSuccessAction = (operation: Operation) => ({ type: BudgetActions.UPDATE_OPERATION_SUCCESS, payload: operation });

export const updateOperationFailureAction = () => ({ type: BudgetActions.UPDATE_OPERATION_FAILURE });

export const removeOperationAction = (operation: Operation) => ({ type: BudgetActions.REMOVE_OPERATION, payload: operation });

export const removeOperationSuccessAction = (operation: Operation) => ({ type: BudgetActions.REMOVE_OPERATION_SUCCESS, payload: operation });

export const removeOperationFailureAction = () => ({ type: BudgetActions.REMOVE_OPERATION_FAILURE });
