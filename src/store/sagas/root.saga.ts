import { all } from 'redux-saga/effects';
import { budgetSagas } from './budget.saga';

export function* rootSaga(): Generator {
	yield all([
		budgetSagas(),
	]);
}
