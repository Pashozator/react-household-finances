import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
	createOperationFailureAction,
	createOperationSuccessAction,
	BudgetActions,
	updateOperationFailureAction,
	updateOperationSuccessAction,
	getBudgetFailureAction,
	getBudgetSuccessAction,
	removeOperationFailureAction,
	removeOperationSuccessAction
} from '../actions/budget.actions';
import { api } from '../../core/api/api';
import { getBudget } from '../../domain/endpoints/budget/budget.get.endpoint';
import { postOperation } from '../../domain/endpoints/budget/operation.post.endpoint';
import { putOperation } from '../../domain/endpoints/budget/operation.put.endpoint';
import { deleteOperation } from '../../domain/endpoints/budget/operation.delete.endpoint';
import {
	closeCreateOperationDialogAction,
	closeUpdateOperationDialogAction,
	openErrorDialogAction
} from '../actions/dialogs.actions';
import { Operation } from '../../domain/interfaces/operation';

function* getBudgetSaga(): SagaIterator {
	try {
		const response = yield call(() => api.request(getBudget()));

		yield put(getBudgetSuccessAction(response.data));
	} catch (err) {
		console.error(err);
		yield put(getBudgetFailureAction());
	}
}

function* createOperationSaga(action: { type: BudgetActions.CREATE_OPERATION, payload: Operation }): SagaIterator {
	try {
		const response = yield call(() => api.request(postOperation(action.payload)));

		yield put(createOperationSuccessAction(response.data));
		yield put(closeCreateOperationDialogAction());
	} catch (err) {
		console.error(err);
		yield put(createOperationFailureAction());
	}
}

function* updateOperationSaga(action: { type: BudgetActions.UPDATE_OPERATION, payload: Operation }): SagaIterator {
	try {
		yield call(() => api.request(putOperation({ id: action.payload.id }, action.payload)));
		yield put(updateOperationSuccessAction(action.payload));
		yield put(closeUpdateOperationDialogAction());
	} catch (err) {
		console.error(err);
		yield put(updateOperationFailureAction());
	}
}

function* removeOperationSaga(action: { type: BudgetActions.REMOVE_OPERATION, payload: Operation }): SagaIterator {
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
		yield takeLatest(BudgetActions.CREATE_OPERATION, createOperationSaga),
		yield takeLatest(BudgetActions.UPDATE_OPERATION, updateOperationSaga),
		yield takeLatest(BudgetActions.REMOVE_OPERATION, removeOperationSaga),
		yield takeLatest(BudgetActions.GET_BUDGET_FAILURE, handleFailureSaga),
		yield takeLatest(BudgetActions.CREATE_OPERATION_FAILURE, handleFailureSaga),
		yield takeLatest(BudgetActions.UPDATE_OPERATION_FAILURE, handleFailureSaga),
		yield takeLatest(BudgetActions.REMOVE_OPERATION_FAILURE, handleFailureSaga),
	]);
}
