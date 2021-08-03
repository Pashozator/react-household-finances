import { expectSaga } from 'redux-saga-test-plan';
import {
	createOperationAction,
	createOperationFailureAction,
	createOperationSuccessAction,
	getBudgetFailureAction,
	getBudgetSuccessAction, removeOperationAction,
	removeOperationFailureAction,
	removeOperationSuccessAction,
	updateOperationAction,
	updateOperationFailureAction,
	updateOperationSuccessAction
} from '../../actions/budget.actions';
import { budgetMock } from '../../../mocks/budget.mock';
import {
	createOperationSaga,
	getBudgetSaga,
	handleFailureSaga,
	removeOperationSaga,
	updateOperationSaga
} from './budget.saga';
import { rest, server } from '../../../test/server';
import { ResponseComposition, RestContext, RestRequest } from 'msw';
import {
	closeCreateOperationDialogAction,
	closeUpdateOperationDialogAction,
	openErrorDialogAction
} from '../../actions/dialogs.actions';
import { operationMock } from '../../../mocks/opreration.mock';
import { Operation } from '../../../domain/interfaces/operation';
import { UpdateOperationEndpointRequestBody } from '../../../domain/endpoints/budget/update-operation.endpoint';

describe('budget saga', () => {
	describe('getBudgetSaga', () => {
		it('should dispatch successful action', () => {
			return expectSaga(getBudgetSaga)
				.put(getBudgetSuccessAction(budgetMock))
				.run();
		});

		it('should dispatch failure action', () => {
			server.use(
				rest.get('/budget', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
					return res(ctx.status(401), ctx.json({ error: 'error' }));
				}),
			);

			return expectSaga(getBudgetSaga)
				.put(getBudgetFailureAction())
				.run();
		});
	});

	describe('createOperationSaga', () => {
		it('should dispatch successful action', () => {
			return expectSaga(createOperationSaga, createOperationAction(operationMock))
				.put(createOperationSuccessAction(operationMock))
				.put(closeCreateOperationDialogAction())
				.run();
		});

		it('should dispatch failure action', () => {
			server.use(
				rest.post('/budget/operations', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
					return res(ctx.status(401), ctx.json({ error: 'error' }));
				}),
			);

			return expectSaga(createOperationSaga, createOperationAction(operationMock))
				.put(createOperationFailureAction())
				.run();
		});
	});

	describe('updateOperationSaga', () => {
		const operation: Operation = operationMock;
		const payload: { id: string, updateOperationRequestBody: UpdateOperationEndpointRequestBody } = { id: operation.id, updateOperationRequestBody: { label: operation.label, value: operation.value, description: operation.description, date: operation.date}};

		it('should dispatch successful action', () => {
			return expectSaga(updateOperationSaga, updateOperationAction(payload))
				.put(updateOperationSuccessAction(operation))
				.put(closeUpdateOperationDialogAction())
				.run();
		});

		it('should dispatch failure action', () => {
			server.use(
				rest.put('/budget/operations/:id', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
					return res(ctx.status(401), ctx.json({ error: 'error' }));
				}),
			);

			return expectSaga(updateOperationSaga, updateOperationAction(payload))
				.put(updateOperationFailureAction())
				.run();
		});
	});

	describe('removeOperationSaga', () => {
		it('should dispatch successful action', () => {
			return expectSaga(removeOperationSaga, removeOperationAction(operationMock))
				.put(removeOperationSuccessAction(operationMock))
				.run();
		});

		it('should dispatch failure action', () => {
			server.use(
				rest.delete('/budget/operations/:id', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
					return res(ctx.status(401), ctx.json({ error: 'error' }));
				}),
			);

			return expectSaga(removeOperationSaga, removeOperationAction(operationMock))
				.put(removeOperationFailureAction())
				.run();
		});
	});

	describe('handleFailureSaga', () => {
		it('should dispatch open error dialog action', () => {
			return expectSaga(handleFailureSaga)
				.put(openErrorDialogAction())
				.run();
		});
	});
});
