import * as BudgetActions from '../actions/budget.actions';
import { getBudgetFailure, getBudgetSuccess } from '../actions/budget.actions';
import { all, put, takeLatest } from 'redux-saga/effects';
import { addOperationFailureAction } from '../actions/budget.actions';
import { addOperationSuccessAction } from '../actions/budget.actions';
import { editOperationFailureAction } from '../actions/budget.actions';
import { editOperationSuccessAction } from '../actions/budget.actions';
import { removeOperationFailureAction } from '../actions/budget.actions';
import { removeOperationSuccessAction } from '../actions/budget.actions';
import { openErrorDialogAction } from '../actions/dialogs.actions';

function* getBudget() {
	try {
		const response = yield fetch(`/budget`, { method: 'get' }),
			body = yield response.json();

		yield put(getBudgetSuccess(body.data));
	} catch (err) {
		console.error(err);
		yield put(getBudgetFailure());
	}
}

function* addOperation(action) {
	try {
		const response = yield fetch('/budget/operations', { method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(action.payload) }),
			body = yield response.json();

		yield put(addOperationSuccessAction(body.data));
	} catch (err) {
		console.error(err);
		yield put(addOperationFailureAction());
	}
}

function* editOperation(action) {
	try {
		const response = yield fetch(`/budget/operations/${action.payload.id}`, { method: 'put', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(action.payload) }),
			body = yield response.json();

		yield put(editOperationSuccessAction(action.payload));
	} catch (err) {
		console.error(err);
		yield put(editOperationFailureAction());
	}
}

function* removeOperation(action) {
	try {
		const response = yield fetch(`/budget/operations/${action.payload.id}`, { method: 'delete' }),
			body = yield response.json();

		yield put(removeOperationSuccessAction(action.payload));
	} catch (err) {
		console.error(err);
		yield put(removeOperationFailureAction());
	}
}

function* failureHandler() {
	yield put(openErrorDialogAction());
}

export function* budgetSagas() {
	yield all([
		yield takeLatest(BudgetActions.GET_BUDGET, getBudget),
		yield takeLatest(BudgetActions.ADD_OPERATION, addOperation),
		yield takeLatest(BudgetActions.EDIT_OPERATION, editOperation),
		yield takeLatest(BudgetActions.REMOVE_OPERATION, removeOperation),
		yield takeLatest(BudgetActions.GET_BUDGET_FAILURE, failureHandler),
		yield takeLatest(BudgetActions.ADD_OPERATION_FAILURE, failureHandler),
		yield takeLatest(BudgetActions.EDIT_OPERATION_FAILURE, failureHandler),
		yield takeLatest(BudgetActions.REMOVE_OPERATION_FAILURE, failureHandler)
	]);
}
