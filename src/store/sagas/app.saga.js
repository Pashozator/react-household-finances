import { all } from 'redux-saga/effects';
import { addGoalSaga, goalsSaga, removeGoalSaga, editGoalSaga, realizeGoalSaga } from './goals.saga';
import { addOperationSaga, budgetSaga, editOperationSaga, removeOperationSaga } from './budget.saga';

export default function* appSaga() {
	yield all([
		budgetSaga(),
		addOperationSaga(),
		editOperationSaga(),
		removeOperationSaga(),
		goalsSaga(),
		addGoalSaga(),
		removeGoalSaga(),
		editGoalSaga(),
		realizeGoalSaga()
	])
}
