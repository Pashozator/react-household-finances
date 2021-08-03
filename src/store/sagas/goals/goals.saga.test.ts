import {
	createGoalSaga,
	getGoalsSaga,
	handleFailureSaga,
	realizeGoalSaga,
	removeGoalSaga,
	updateGoalSaga
} from './goals.saga';
import {
	createGoalAction,
	createGoalFailureAction,
	createGoalSuccessAction,
	getGoalsFailureAction,
	getGoalsSuccessAction,
	realizeGoalAction,
	realizeGoalFailureAction,
	realizeGoalSuccessAction,
	removeGoalAction,
	removeGoalFailureAction,
	removeGoalSuccessAction,
	updateGoalAction,
	updateGoalFailureAction,
	updateGoalSuccessAction
} from '../../actions/goals.actions';
import { goalMock } from '../../../mocks/goal.mock';
import { expectSaga } from 'redux-saga-test-plan';
import { rest, server } from '../../../test/server';
import { ResponseComposition, RestContext, RestRequest } from 'msw';
import {
	closeCreateGoalDialogAction,
	closeUpdateGoalDialogAction,
	openErrorDialogAction
} from '../../actions/dialogs.actions';
import { Goal } from '../../../domain/interfaces/goal';
import { PutGoalRequestBody } from '../../../domain/endpoints/goals/goal.put.endpoint';

describe('goals saga', () => {
	describe('getGoalsSaga', () => {
		it('should dispatch successful action', () => {
			return expectSaga(getGoalsSaga)
				.put(getGoalsSuccessAction([goalMock]))
				.run();
		});

		it('should dispatch failure action', () => {
			server.use(
				rest.get('/goals', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
					return res(ctx.status(401), ctx.json({ error: 'error' }));
				}),
			);

			return expectSaga(getGoalsSaga)
				.put(getGoalsFailureAction())
				.run();
		});
	});

	describe('createGoalSaga', () => {
		it('should dispatch successful action', () => {
			return expectSaga(createGoalSaga, createGoalAction(goalMock))
				.put(createGoalSuccessAction(goalMock))
				.put(closeCreateGoalDialogAction())
				.run();
		});

		it('should dispatch failure action', () => {
			server.use(
				rest.post('/goals', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
					return res(ctx.status(401), ctx.json({ error: 'error' }));
				}),
			);

			return expectSaga(createGoalSaga, createGoalAction(goalMock))
				.put(createGoalFailureAction())
				.run();
		});
	});

	describe('updateGoalSaga', () => {
		const goal: Goal = goalMock;
		const payload: { id: string, putGoalRequestBody: PutGoalRequestBody } = { id: goal.id, putGoalRequestBody: { label: goal.label, value: goal.value, description: goal.description } };

		it('should dispatch successful action', () => {
			return expectSaga(updateGoalSaga, updateGoalAction(payload))
				.put(updateGoalSuccessAction(goal))
				.put(closeUpdateGoalDialogAction())
				.run();
		});

		it('should dispatch failure action', () => {
			server.use(
				rest.put('/goals/:id', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
					return res(ctx.status(401), ctx.json({ error: 'error' }));
				}),
			);

			return expectSaga(updateGoalSaga, updateGoalAction(payload))
				.put(updateGoalFailureAction())
				.run();
		});
	});

	describe('removeGoalSaga', () => {
		it('should dispatch successful action', () => {
			return expectSaga(removeGoalSaga, removeGoalAction(goalMock))
				.put(removeGoalSuccessAction(goalMock))
				.run();
		});

		it('should dispatch failure action', () => {
			server.use(
				rest.delete('/goals/:id', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
					return res(ctx.status(401), ctx.json({ error: 'error' }));
				}),
			);

			return expectSaga(removeGoalSaga, removeGoalAction(goalMock))
				.put(removeGoalFailureAction())
				.run();
		});
	});

	describe('realizeGoalSaga', () => {
		it('should dispatch successful action', () => {
			return expectSaga(realizeGoalSaga, realizeGoalAction(goalMock))
				.put(realizeGoalSuccessAction(goalMock))
				.run();
		});

		it('should dispatch failure action', () => {
			server.use(
				rest.patch('/goals/:id', (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
					return res(ctx.status(401), ctx.json({ error: 'error' }));
				}),
			);

			return expectSaga(realizeGoalSaga, realizeGoalAction(goalMock))
				.put(realizeGoalFailureAction())
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
