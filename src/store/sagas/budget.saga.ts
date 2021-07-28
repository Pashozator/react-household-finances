import { BudgetActions, getBudgetFailure, getBudgetSuccess } from '../actions/budget.actions';
import { all, put, takeLatest } from 'redux-saga/effects';
import { addOperationFailureAction } from '../actions/budget.actions';
import { addOperationSuccessAction } from '../actions/budget.actions';
import { editOperationFailureAction } from '../actions/budget.actions';
import { editOperationSuccessAction } from '../actions/budget.actions';
import { removeOperationFailureAction } from '../actions/budget.actions';
import { removeOperationSuccessAction } from '../actions/budget.actions';
import { api } from '../../core/api/api';
import { getBudget } from '../../domain/endpoints/budget/budget.get.endpoint';
import { postOperation } from '../../domain/endpoints/budget/operation.post.endpoint';
import { putOperation } from '../../domain/endpoints/budget/operation.put.endpoint';
import { deleteOperation } from '../../domain/endpoints/budget/operation.delete.endpoint';

function* getBudgetSaga(): Generator {
	try {
		const response: any = yield api.request(getBudget());

		yield put(getBudgetSuccess(response.data));
	} catch (err) {
		console.error(err);
		yield put(getBudgetFailure());
	}
}

function* addOperationSaga(action: any): Generator {
	try {
		const response: any = yield api.request(postOperation(action.payload));

		yield put(addOperationSuccessAction(response.data));
	} catch (err) {
		console.error(err);
		yield put(addOperationFailureAction());
	}
}

function* editOperationSaga(action: any): Generator {
	try {
		yield api.request(putOperation({ id:action.payload.id }, action.payload ));
		yield put(editOperationSuccessAction(action.payload));
	} catch (err) {
		console.error(err);
		yield put(editOperationFailureAction());
	}
}

function* removeOperationSaga(action: any): Generator {
	try {
		yield api.request(deleteOperation({ id: action.payload.id }));
		yield put(removeOperationSuccessAction(action.payload));
	} catch (err) {
		console.error(err);
		yield put(removeOperationFailureAction());
	}
}

export function* budgetSagas(): Generator {
	yield all([
		yield takeLatest(BudgetActions.GET_BUDGET, getBudgetSaga),
		yield takeLatest(BudgetActions.ADD_OPERATION, addOperationSaga),
		yield takeLatest(BudgetActions.EDIT_OPERATION, editOperationSaga),
		yield takeLatest(BudgetActions.REMOVE_OPERATION, removeOperationSaga)
	]);
}
