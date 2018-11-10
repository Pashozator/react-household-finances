export const GET_BUDGET = '[Budget] Get budget';
export const GET_BUDGET_SUCCESS = '[Budget] Get budget success';
export const GET_BUDGET_FAILURE = '[Budget] Get budget failure';
export const ADD_OPERATION = '[Budget] Add operation';
export const EDIT_OPERATION = '[Budget] Edit operation';
export const REMOVE_OPERATION = '[Budget] Remove operation';
export const REDUCE_DEBIT = '[Budget] Reduce debit';

export const getBudgetAction = () => {
	return {
		type: GET_BUDGET
	}
};

export const getBudgetSuccess = budget => {
	return {
		type: GET_BUDGET_SUCCESS,
		payload: budget
	}
};

export const getBudgetFailure = () => {
	return {
		type: GET_BUDGET_FAILURE
	}
};

export const addOperationAction = operation => {
	return {
		type: ADD_OPERATION,
		payload: operation
	}
};

export const editOperationAction = operation => {
	return {
		type: EDIT_OPERATION,
		payload: operation
	}
};

export const removeOperationAction = operation => {
	return {
		type: REMOVE_OPERATION,
		payload: operation
	}
};

export const reduceDebitAction = goal => {
	return {
		type: REDUCE_DEBIT,
		payload: goal
	}
};
