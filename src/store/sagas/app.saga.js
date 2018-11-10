import budgetSaga from './budget.saga';
import { all } from 'redux-saga/effects';
import { addGoalSaga, goalsSaga } from './goals.saga';

export default function* appSaga() {
	yield all([
		budgetSaga(),
		goalsSaga(),
		addGoalSaga()
	])
}
