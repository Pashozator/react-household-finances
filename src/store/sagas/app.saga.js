import { all } from 'redux-saga/effects';
import { goalsSagas } from './goals.saga';
import { budgetSagas } from './budget.saga';

export default function* appSaga() {
	yield all([
		budgetSagas(),
		goalsSagas()
	])
}
