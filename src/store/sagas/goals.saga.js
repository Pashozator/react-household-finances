import * as GoalsActions from '../actions/goals.actions';
import {
	addGoalFailureAction,
	addGoalSuccessAction,
	getGoalsFailureAction,
	getGoalsSuccessAction
} from '../actions/goals.actions';
import { all, put, takeLatest } from 'redux-saga/effects';
import { removeGoalSuccessAction } from '../actions/goals.actions';
import { removeGoalFailureAction } from '../actions/goals.actions';
import { editGoalSuccessAction } from '../actions/goals.actions';
import { editGoalFailureAction } from '../actions/goals.actions';
import { realizeGoalSuccessAction } from '../actions/goals.actions';
import { realizeGoalFailureAction } from '../actions/goals.actions';

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

function* addGoal(action) {
	try {
		const response = yield fetch('/goals', { method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(action.payload) }),
			body = yield response.json();

		yield put(addGoalSuccessAction(body.data));
	} catch (err) {
		console.error(err);
		yield put(addGoalFailureAction())
	}
}

function* removeGoal(action) {
	try {
		const response = yield fetch(`/goals/${action.payload.id}`, { method: 'delete' }),
			body = yield response.json();

		yield put(removeGoalSuccessAction(action.payload));
	} catch (err) {
		console.error(err);
		yield put(removeGoalFailureAction());
	}
}

function* editGoal(action) {
	try {
		const response = yield fetch(`/goals/${action.payload.id}`, { method: 'put', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(action.payload) }),
			body = yield response.json();

		yield put(editGoalSuccessAction(action.payload));
	} catch (err) {
		console.error(err);
		yield put(editGoalFailureAction());
	}
}

function* realizeGoal(action) {
	try {
		const response = yield fetch(`/goals/${action.payload.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({}) }),
			body = yield response.json();

		yield put(realizeGoalSuccessAction(action.payload));
	} catch (err) {
		console.error(err);
		yield put(realizeGoalFailureAction());
	}
}

export function* goalsSagas() {
	yield all([
		yield takeLatest(GoalsActions.GET_GOALS, getGoals),
		yield takeLatest(GoalsActions.ADD_GOAL, addGoal),
		yield takeLatest(GoalsActions.REMOVE_GOAL, removeGoal),
		yield takeLatest(GoalsActions.EDIT_GOAL, editGoal),
		yield takeLatest(GoalsActions.REALIZE_GOAL, realizeGoal)
	])
}
