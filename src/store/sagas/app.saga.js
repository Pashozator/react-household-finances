import budgetSaga from './budget.saga';
import goalsSaga from './goals.saga';
import { all } from 'redux-saga/effects';

export default function* appSaga() {
	yield all([
		budgetSaga(),
		goalsSaga()
	])
}
