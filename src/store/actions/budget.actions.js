export const GET_BUDGET = '[Budget] Get budget';
export const GET_BUDGET_SUCCESS = '[Budget] Get budget success';
export const GET_BUDGET_FAILURE = '[Budget] Get budget failure';
export const ADD_OPERATION = '[Budget] Add Operation';
export const ADD_OPERATION_SUCCESS = '[Budget] Add Operation success';
export const ADD_OPERATION_FAILURE = '[Budget] Add Operation failure';
export const EDIT_OPERATION = '[Budget] Edit Operation';
export const EDIT_OPERATION_SUCCESS = '[Budget] Edit Operation success';
export const EDIT_OPERATION_FAILURE = '[Budget] Edit Operation failure';
export const REMOVE_OPERATION = '[Budget] Remove Operation';
export const REMOVE_OPERATION_SUCCESS = '[Budget] Remove Operation success';
export const REMOVE_OPERATION_FAILURE = '[Budget] Remove Operation failure';
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
