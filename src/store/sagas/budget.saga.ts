import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
	addOperationFailureAction,
	addOperationSuccessAction,
	BudgetActions,
	editOperationFailureAction,
	editOperationSuccessAction,
	getBudgetFailure,
	getBudgetSuccess,
	removeOperationFailureAction,
	removeOperationSuccessAction
} from '../actions/budget.actions';
import { api } from '../../core/api/api';
import { getBudget } from '../../domain/endpoints/budget/budget.get.endpoint';
import { postOperation } from '../../domain/endpoints/budget/operation.post.endpoint';
import { putOperation } from '../../domain/endpoints/budget/operation.put.endpoint';
import { deleteOperation } from '../../domain/endpoints/budget/operation.delete.endpoint';
import { openErrorDialogAction } from '../actions/dialogs.actions';

function* getBudgetSaga(): SagaIterator {
	try {
		const response = yield call(() => api.request(getBudget()));

		yield put(getBudgetSuccess(response.data));
	} catch (err) {
		console.error(err);
		yield put(getBudgetFailure());
	}
}

function* addOperationSaga(action: any): SagaIterator {
	try {
		const response = yield call(() => api.request(postOperation(action.payload)));

		yield put(addOperationSuccessAction(response.data));
	} catch (err) {
		console.error(err);
		yield put(addOperationFailureAction());
	}
}

function* editOperationSaga(action: any): SagaIterator {
	try {
		yield call(() => api.request(putOperation({ id: action.payload.id }, action.payload)));
		yield put(editOperationSuccessAction(action.payload));
	} catch (err) {
		console.error(err);
		yield put(editOperationFailureAction());
	}
}

function* removeOperationSaga(action: any): SagaIterator {
	try {
		yield call(() => api.request(deleteOperation({ id: action.payload.id })));
		yield put(removeOperationSuccessAction(action.payload));
	} catch (err) {
		console.error(err);
		yield put(removeOperationFailureAction());
	}
}

function* handleFailureSaga(): SagaIterator {
	yield put(openErrorDialogAction());
}

export function* budgetSagas(): SagaIterator {
	yield all([
		yield takeLatest(BudgetActions.GET_BUDGET, getBudgetSaga),
		yield takeLatest(BudgetActions.ADD_OPERATION, addOperationSaga),
		yield takeLatest(BudgetActions.EDIT_OPERATION, editOperationSaga),
		yield takeLatest(BudgetActions.REMOVE_OPERATION, removeOperationSaga),
		yield takeLatest(BudgetActions.GET_BUDGET_FAILURE, handleFailureSaga),
		yield takeLatest(BudgetActions.ADD_OPERATION_FAILURE, handleFailureSaga),
		yield takeLatest(BudgetActions.EDIT_OPERATION_FAILURE, handleFailureSaga),
		yield takeLatest(BudgetActions.REMOVE_OPERATION_FAILURE, handleFailureSaga),
	]);
}
