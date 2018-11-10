import budgetSaga from './budget.saga';
import { all } from 'redux-saga/effects';
import { addGoalSaga, goalsSaga, removeGoalSaga } from './goals.saga';

export default function* appSaga() {
	yield all([
		budgetSaga(),
		goalsSaga(),
		addGoalSaga(),
		removeGoalSaga()
	])
}
