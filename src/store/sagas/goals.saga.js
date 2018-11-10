import * as GoalsActions from '../actions/goals.actions';
import {
	addGoalFailureAction,
	addGoalSuccessAction,
	getGoalsFailureAction,
	getGoalsSuccessAction
} from '../actions/goals.actions';
import { put, takeLatest } from 'redux-saga/effects';
import { removeGoalSuccessAction } from '../actions/goals.actions';
import { removeGoalFailureAction } from '../actions/goals.actions';
import { editGoalSuccessAction } from '../actions/goals.actions';
import { editGoalFailureAction } from '../actions/goals.actions';

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

		yield put(addGoalSuccessAction(action.payload));
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

export function* goalsSaga() {
	yield takeLatest(GoalsActions.GET_GOALS, getGoals);
}

export function* addGoalSaga() {
	yield takeLatest(GoalsActions.ADD_GOAL, addGoal);
}

export function* removeGoalSaga() {
	yield takeLatest(GoalsActions.REMOVE_GOAL, removeGoal);
}

export function* editGoalSaga() {
	yield takeLatest(GoalsActions.EDIT_GOAL, editGoal);
}
