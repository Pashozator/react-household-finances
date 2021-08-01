import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
	BudgetActions,
	createOperationFailureAction,
	createOperationSuccessAction,
	getBudgetFailureAction,
	getBudgetSuccessAction,
	removeOperationFailureAction,
	removeOperationSuccessAction,
	updateOperationFailureAction,
	updateOperationSuccessAction
} from '../../actions/budget.actions';
import { api } from '../../../core/api/api';
import { getBudget } from '../../../domain/endpoints/budget/budget.get.endpoint';
import { postOperation } from '../../../domain/endpoints/budget/operation.post.endpoint';
import { putOperation } from '../../../domain/endpoints/budget/operation.put.endpoint';
import { deleteOperation } from '../../../domain/endpoints/budget/operation.delete.endpoint';
import {
	closeCreateOperationDialogAction,
	closeUpdateOperationDialogAction,
	openErrorDialogAction
} from '../../actions/dialogs.actions';
import { Operation } from '../../../domain/interfaces/operation';
import { ActionWithPayload } from '../../interfaces/action-with-payload.interface';

export function* getBudgetSaga(): SagaIterator {
	try {
		const response = yield call(() => api.request(getBudget()));

		yield put(getBudgetSuccessAction(response.data));
	} catch (err) {
		yield put(getBudgetFailureAction());
	}
}

export function* createOperationSaga(action: ActionWithPayload<Operation>): SagaIterator {
	try {
		const response = yield call(() => api.request(postOperation(action.payload)));

		yield put(createOperationSuccessAction(response.data));
		yield put(closeCreateOperationDialogAction());
	} catch (err) {
		yield put(createOperationFailureAction());
	}
}

export function* updateOperationSaga(action: ActionWithPayload<Operation>): SagaIterator {
	try {
		yield call(() => api.request(putOperation({ id: action.payload.id }, action.payload)));
		yield put(updateOperationSuccessAction(action.payload));
		yield put(closeUpdateOperationDialogAction());
	} catch (err) {
		yield put(updateOperationFailureAction());
	}
}

export function* removeOperationSaga(action: ActionWithPayload<Operation>): SagaIterator {
	try {
		yield call(() => api.request(deleteOperation({ id: action.payload.id })));
		yield put(removeOperationSuccessAction(action.payload));
	} catch (err) {
		yield put(removeOperationFailureAction());
	}
}

export function* handleFailureSaga(): SagaIterator {
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
