import * as BudgetActions from '../actions/budget.actions';
import { getBudgetFailure, getBudgetSuccess } from '../actions/budget.actions';
import { put, takeLatest } from 'redux-saga/effects';
import { addOperationFailureAction } from '../actions/budget.actions';
import { addOperationSuccessAction } from '../actions/budget.actions';

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

export function* budgetSaga() {
	yield takeLatest(BudgetActions.GET_BUDGET, getBudget);
}

export function* addOperationSaga() {
	yield takeLatest(BudgetActions.ADD_OPERATION, addOperation);
}
