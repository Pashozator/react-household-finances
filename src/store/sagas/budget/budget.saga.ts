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
import { getBudgetEndpoint } from '../../../domain/endpoints/budget/get-budget.endpoint';
import { createOperationEndpoint, CreateOperationEndpointRequestBody } from '../../../domain/endpoints/budget/create-operation.endpoint';
import { updateOperationEndpoint, UpdateOperationEndpointRequestBody } from '../../../domain/endpoints/budget/update-operation.endpoint';
import { removeOperationEndpoint } from '../../../domain/endpoints/budget/remove-operation.endpoint';
import {
	closeCreateOperationDialogAction,
	closeUpdateOperationDialogAction,
	openErrorDialogAction
} from '../../actions/dialogs.actions';
import { Operation } from '../../../domain/interfaces/operation';
import { ActionWithPayload } from '../../interfaces/action-with-payload.interface';

export function* getBudgetSaga(): SagaIterator {
	try {
		const response = yield call(() => api.request(getBudgetEndpoint()));

		yield put(getBudgetSuccessAction(response.data));
	} catch (err) {
		yield put(getBudgetFailureAction());
	}
}

export function* createOperationSaga(action: ActionWithPayload<CreateOperationEndpointRequestBody>): SagaIterator {
	try {
		const response = yield call(() => api.request(createOperationEndpoint(action.payload)));

		yield put(createOperationSuccessAction(response.data));
		yield put(closeCreateOperationDialogAction());
	} catch (err) {
		yield put(createOperationFailureAction());
	}
}

export function* updateOperationSaga(action: ActionWithPayload<{ id: string, updateOperationRequestBody: UpdateOperationEndpointRequestBody }>): SagaIterator {
	try {
		const response = yield call(() => api.request(updateOperationEndpoint({ id: action.payload.id }, action.payload.updateOperationRequestBody)));
		yield put(updateOperationSuccessAction(response.data));
		yield put(closeUpdateOperationDialogAction());
	} catch (err) {
		yield put(updateOperationFailureAction());
	}
}

export function* removeOperationSaga(action: ActionWithPayload<Operation>): SagaIterator {
	try {
		yield call(() => api.request(removeOperationEndpoint({ id: action.payload.id })));
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
