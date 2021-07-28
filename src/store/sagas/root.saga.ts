import { all } from 'redux-saga/effects';
import { budgetSagas } from './budget.saga';
import { goalsSagas } from './goals.saga';

export function* rootSaga(): Generator {
	yield all([
		budgetSagas(),
		goalsSagas(),
	]);
}
