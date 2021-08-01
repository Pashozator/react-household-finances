import { all } from 'redux-saga/effects';
import { budgetSagas } from './budget/budget.saga';
import { goalsSagas } from './goals/goals.saga';

export function* rootSaga(): Generator {
	yield all([
		budgetSagas(),
		goalsSagas(),
	]);
}
