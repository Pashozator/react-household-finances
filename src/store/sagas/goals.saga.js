import * as GoalsActions from '../actions/goals.actions';
import { getGoalsFailureAction, getGoalsSuccessAction } from '../actions/goals.actions';
import { put, takeLatest } from 'redux-saga/effects';

function* getGoals() {
	try {
		const response = yield fetch('/goals', { method: 'get' }),
			body = yield response.json();

		yield put(getGoalsSuccessAction(body.data));
	} catch (err) {
		console.error(err);
		yield put(getGoalsFailureAction());
	}
}

function* goalsSaga() {
	yield takeLatest(GoalsActions.GET_GOALS, getGoals)
}

export default goalsSaga;
