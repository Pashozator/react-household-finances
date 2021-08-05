import { goalsInitialState, goalsReducer } from './goals.reducer';
import {
	createGoalAction,
	createGoalFailureAction,
	createGoalSuccessAction,
	getGoalsAction,
	getGoalsFailureAction,
	getGoalsSuccessAction, realizeGoalAction, realizeGoalFailureAction, realizeGoalSuccessAction,
	removeGoalAction,
	removeGoalFailureAction, removeGoalSuccessAction,
	updateGoalAction,
	updateGoalFailureAction,
	updateGoalSuccessAction
} from '../../actions/goals.actions';
import { goalsMock } from '../../../mocks/goals.mock';
import { goalMock } from '../../../mocks/goal.mock';
import { Goal } from '../../../domain/interfaces/goal';

describe('goalsReducer', () => {
	it('should return initial state', () => {
		expect(goalsReducer(undefined, {} as any)).toEqual(goalsInitialState);
	});

	it('should handle get goals request', () => {
		expect(goalsReducer(goalsInitialState, getGoalsAction())).toEqual(goalsInitialState);
	});

	it('should handle get goals successful request', () => {
		expect(goalsReducer(goalsInitialState, getGoalsSuccessAction(goalsMock))).toEqual(goalsMock);
	});

	it('should handle get goals failure', () => {
		expect(goalsReducer(goalsInitialState, getGoalsFailureAction())).toEqual(goalsInitialState);
	});

	it('should handle create goal request', () => {
		expect(goalsReducer(goalsInitialState, createGoalAction(goalMock))).toEqual(goalsInitialState);
	});

	it('should handle create goal successful request', () => {
		expect(goalsReducer(goalsInitialState, createGoalSuccessAction(goalMock))).toEqual([goalMock]);
	});

	it('should handle create goal failure', () => {
		expect(goalsReducer(goalsInitialState, createGoalFailureAction())).toEqual(goalsInitialState);
	});

	it('should handle update goal request', () => {
		const goal: Goal = goalMock;
		expect(goalsReducer(goalsInitialState, updateGoalAction({ id: goal.id, putGoalRequestBody: { label: goal.label, value: goal.value, description: goal.description} }))).toEqual(goalsInitialState);
	});

	it('should handle update goal successful request', () => {
		const goalBeforeUpdate: Goal = goalMock;
		const goalAfterUpdate: Goal = { ...goalBeforeUpdate, label: 'labelAfterUpdate' };
		expect(goalsReducer([goalBeforeUpdate], updateGoalSuccessAction(goalAfterUpdate))).toEqual([goalAfterUpdate]);
	});

	it('should handle update goal failure', () => {
		expect(goalsReducer(goalsInitialState, updateGoalFailureAction())).toEqual(goalsInitialState);
	});

	it('should handle remove goal request', () => {
		expect(goalsReducer([goalMock], removeGoalAction(goalMock))).toEqual([goalMock]);
	});

	it('should handle remove goal successful request', () => {
		expect(goalsReducer([goalMock], removeGoalSuccessAction(goalMock))).toEqual([]);
	});

	it('should handle remove goal failure', () => {
		expect(goalsReducer([goalMock], removeGoalFailureAction())).toEqual([goalMock]);
	});

	it('should handle realize goal request', () => {
		expect(goalsReducer([goalMock], realizeGoalAction(goalMock))).toEqual([goalMock]);
	});

	it('should handle realize goal successful request', () => {
		expect(goalsReducer([{ ...goalMock, realized: false }], realizeGoalSuccessAction(goalMock))).toEqual([{ ...goalMock, realized: true }]);
	});

	it('should handle realize goal failure', () => {
		expect(goalsReducer([goalMock], realizeGoalFailureAction())).toEqual([goalMock]);
	});
});
