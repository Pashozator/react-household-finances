import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
	createGoalFailureAction,
	createGoalSuccessAction,
	updateGoalFailureAction,
	updateGoalSuccessAction,
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
import {
	closeCreateGoalDialogAction,
	closeUpdateGoalDialogAction,
	openErrorDialogAction
} from '../actions/dialogs.actions';
import { Goal } from '../../domain/interfaces/goal';
import { ActionWithPayload } from '../interfaces/action-with-payload.interface';

function* getGoalsSaga(): SagaIterator {
	try {
		const response = yield call(() => api.request(getGoals()));

		yield put(getGoalsSuccessAction(response.data));
	} catch (err) {
		console.error(err);
		yield put(getGoalsFailureAction());
	}
}

function* createGoalSaga(action: { type: GoalsActions.CREATE_GOAL, payload: Goal }): SagaIterator {
	try {
		const response = yield call(() => api.request(postGoal(action.payload)));

		yield put(createGoalSuccessAction(response.data));
		yield put(closeCreateGoalDialogAction());
	} catch (err) {
		console.error(err);
		yield put(createGoalFailureAction())
	}
}

function* updateGoalSaga(action: ActionWithPayload<Goal>): SagaIterator {
	try {
		yield call(() => api.request(putGoal({ id: action.payload.id }, action.payload)));
		yield put(updateGoalSuccessAction(action.payload));
		yield put(closeUpdateGoalDialogAction());
	} catch (err) {
		console.error(err);
		yield put(updateGoalFailureAction());
	}
}

function* removeGoalSaga(action: { type: GoalsActions.REMOVE_GOAL, payload: Goal }): SagaIterator {
	try {
		yield call(() => api.request(deleteGoal({ id: action.payload.id })));
		yield put(removeGoalSuccessAction(action.payload));
	} catch (err) {
		console.error(err);
		yield put(removeGoalFailureAction());
	}
}

function* realizeGoalSaga(action: { type: GoalsActions.REALIZE_GOAL, payload: Goal }): SagaIterator {
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
		yield takeLatest(GoalsActions.CREATE_GOAL, createGoalSaga),
		yield takeLatest(GoalsActions.UPDATE_GOAL, updateGoalSaga),
		yield takeLatest(GoalsActions.REMOVE_GOAL, removeGoalSaga),
		yield takeLatest(GoalsActions.REALIZE_GOAL, realizeGoalSaga),
		yield takeLatest(GoalsActions.GET_GOALS_FAILURE, handleFailureSaga),
		yield takeLatest(GoalsActions.CREATE_GOAL_FAILURE, handleFailureSaga),
		yield takeLatest(GoalsActions.UPDATE_GOAL_FAILURE, handleFailureSaga),
		yield takeLatest(GoalsActions.REMOVE_GOAL_FAILURE, handleFailureSaga),
		yield takeLatest(GoalsActions.REALIZE_GOAL_FAILURE, handleFailureSaga),
	])
}
