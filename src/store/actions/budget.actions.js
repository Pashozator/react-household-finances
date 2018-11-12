export const GET_BUDGET = '[Budget] Get budget';
export const GET_BUDGET_SUCCESS = '[Budget] Get budget success';
export const GET_BUDGET_FAILURE = '[Budget] Get budget failure';
export const ADD_OPERATION = '[Budget] Add operation';
export const ADD_OPERATION_SUCCESS = '[Budget] Add operation success';
export const ADD_OPERATION_FAILURE = '[Budget] Add operation failure';
export const EDIT_OPERATION = '[Budget] Edit operation';
export const EDIT_OPERATION_SUCCESS = '[Budget] Edit operation success';
export const EDIT_OPERATION_FAILURE = '[Budget] Edit operation failure';
export const REMOVE_OPERATION = '[Budget] Remove operation';
export const REMOVE_OPERATION_SUCCESS = '[Budget] Remove operation success';
export const REMOVE_OPERATION_FAILURE = '[Budget] Remove operation failure';
export const REDUCE_DEBIT = '[Budget] Reduce debit';

export const getBudgetAction = () => ({ type: GET_BUDGET });

export const getBudgetSuccess = budget => ({ type: GET_BUDGET_SUCCESS, payload: budget });

export const getBudgetFailure = () => ({ type: GET_BUDGET_FAILURE });

export const addOperationAction = operation => ({ type: ADD_OPERATION, payload: operation });

export const addOperationSuccessAction = operation => ({ type: ADD_OPERATION_SUCCESS, payload: operation });

export const addOperationFailureAction = () => ({ type: ADD_OPERATION_FAILURE });

export const editOperationAction = operation => ({ type: EDIT_OPERATION, payload: operation });

export const editOperationSuccessAction = operation => ({ type: EDIT_OPERATION_SUCCESS, payload: operation });

export const editOperationFailureAction = () => ({ type: EDIT_OPERATION_FAILURE });

export const removeOperationAction = operation => ({ type: REMOVE_OPERATION, payload: operation });

export const removeOperationSuccessAction = operation => ({ type: REMOVE_OPERATION_SUCCESS, payload: operation });

export const removeOperationFailureAction = () => ({ type: REMOVE_OPERATION_FAILURE });

export const reduceDebitAction = goal => ({ type: REDUCE_DEBIT, payload: goal });
