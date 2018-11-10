import * as BudgetActions from '../actions/budget.actions';
import { getBudgetFailure, getBudgetSuccess } from '../actions/budget.actions';
import { put, takeLatest } from 'redux-saga/effects';

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

function* budgetSaga() {
	yield takeLatest(BudgetActions.GET_BUDGET, getBudget);
}

export default budgetSaga;
