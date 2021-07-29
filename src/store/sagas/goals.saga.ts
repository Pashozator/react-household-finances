import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
	addGoalFailureAction,
	addGoalSuccessAction,
	editGoalFailureAction,
	editGoalSuccessAction,
	getGoalsFailureAction,
	getGoalsSuccessAction,
	GoalsActions,
	realizeGoalFailureAction,
	realizeGoalSuccessAction,
	removeGoalFailureAction,
	removeGoalSuccessAction
} from '../actions/goals.actions';
import { api } from '../../core/api/api';
import { getGoals } from '../../domain/endpoints/goals/goals.get.endpoint';
import { postGoal } from '../../domain/endpoints/goals/goal.post.endpoint';
import { deleteGoal } from '../../domain/endpoints/goals/goal.delete.endpoint';
import { putGoal } from '../../domain/endpoints/goals/goal.put.endpoint';
import { patchGoal } from '../../domain/endpoints/goals/goal.patch.endpoint';
import { openErrorDialogAction } from '../actions/dialogs.actions';

function* getGoalsSaga(): SagaIterator {
	try {
		const response = yield call(() => api.request(getGoals()));

		yield put(getGoalsSuccessAction(response.data));
	} catch (err) {
		console.error(err);
		yield put(getGoalsFailureAction());
	}
}

function* addGoalSaga(action: any): SagaIterator {
	try {
		const response = yield call(() => api.request(postGoal(action.payload)));

		yield put(addGoalSuccessAction(response.data));
	} catch (err) {
		console.error(err);
		yield put(addGoalFailureAction())
	}
}

function* removeGoalSaga(action: any): SagaIterator {
	try {
		yield call(() => api.request(deleteGoal({ id: action.payload.id })));
		yield put(removeGoalSuccessAction(action.payload));
	} catch (err) {
		console.error(err);
		yield put(removeGoalFailureAction());
	}
}

function* editGoalSaga(action: any): SagaIterator {
	try {
		yield call(() => api.request(putGoal({ id: action.payload.id }, action.payload)));
		yield put(editGoalSuccessAction(action.payload));
	} catch (err) {
		console.error(err);
		yield put(editGoalFailureAction());
	}
}

function* realizeGoalSaga(action: any): SagaIterator {
	try {
		yield call(() => api.request(patchGoal({ id: action.payload.id })));
		yield put(realizeGoalSuccessAction(action.payload));
	} catch (err) {
		console.error(err);
		yield put(realizeGoalFailureAction());
	}
}

function* handleFailureSaga(): SagaIterator {
	yield put(openErrorDialogAction());
}

export function* goalsSagas(): SagaIterator {
	yield all([
		yield takeLatest(GoalsActions.GET_GOALS, getGoalsSaga),
		yield takeLatest(GoalsActions.ADD_GOAL, addGoalSaga),
		yield takeLatest(GoalsActions.EDIT_GOAL, editGoalSaga),
		yield takeLatest(GoalsActions.REMOVE_GOAL, removeGoalSaga),
		yield takeLatest(GoalsActions.REALIZE_GOAL, realizeGoalSaga),
		yield takeLatest(GoalsActions.GET_GOALS_FAILURE, handleFailureSaga),
		yield takeLatest(GoalsActions.ADD_GOAL_FAILURE, handleFailureSaga),
		yield takeLatest(GoalsActions.EDIT_GOAL_FAILURE, handleFailureSaga),
		yield takeLatest(GoalsActions.REMOVE_GOAL_FAILURE, handleFailureSaga),
		yield takeLatest(GoalsActions.REALIZE_GOAL_FAILURE, handleFailureSaga),
	])
}
