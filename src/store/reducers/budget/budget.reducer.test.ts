import { budgetInitialState, budgetReducer } from './budget.reducer';
import {
	createOperationAction,
	createOperationFailureAction,
	createOperationSuccessAction,
	updateOperationAction,
	updateOperationFailureAction,
	updateOperationSuccessAction,
	getBudgetAction,
	getBudgetFailureAction,
	getBudgetSuccessAction,
	removeOperationAction,
	removeOperationFailureAction,
	removeOperationSuccessAction
} from '../../actions/budget.actions';
import { budgetMock } from '../../../mocks/budget.mock';
import { operationMock } from '../../../mocks/opreration.mock';
import { Operation } from '../../../domain/interfaces/operation';

describe('budgetReducer', () => {
	it('should return initial state', () => {
		expect(budgetReducer(undefined, {} as any)).toEqual(budgetInitialState);
	});

	it('should handle get budget request', () => {
		expect(budgetReducer(budgetInitialState, getBudgetAction())).toEqual(budgetInitialState);
	});

	it('should handle get budget successful request', () => {
		expect(budgetReducer(budgetInitialState, getBudgetSuccessAction(budgetMock))).toEqual(budgetMock);
	});

	it('should handle get budget failure', () => {
		expect(budgetReducer(budgetInitialState, getBudgetFailureAction())).toEqual(budgetInitialState);
	});

	it('should handle create operation request', () => {
		expect(budgetReducer(budgetInitialState, createOperationAction(operationMock))).toEqual(budgetInitialState);
	});

	it('should handle create operation successful request', () => {
		const operation: Operation = operationMock;

		expect(budgetReducer(budgetInitialState, createOperationSuccessAction(operation))).toEqual({
			...budgetInitialState,
			operations: [operation],
			debit: operation.value
		});
	});

	it('should handle create operation failure', () => {
		expect(budgetReducer(budgetInitialState, createOperationFailureAction())).toEqual(budgetInitialState);
	});

	it('should handle update operation request', () => {
		expect(budgetReducer(budgetInitialState, updateOperationAction(operationMock))).toEqual(budgetInitialState);
	});

	it('should handle update operation successful request', () => {
		const operationBeforeEdit: Operation = operationMock;
		const operationAfterEdit: Operation = { ...operationBeforeEdit, value: 300 };

		expect(budgetReducer({
			...budgetInitialState,
			operations: [operationBeforeEdit],
			debit: operationBeforeEdit.value
		}, updateOperationSuccessAction(operationAfterEdit))).toEqual({
			...budgetInitialState,
			operations: [operationAfterEdit],
			debit: operationAfterEdit.value
		});
	});

	it('should handle update operation failure', () => {
		expect(budgetReducer(budgetInitialState, updateOperationFailureAction())).toEqual(budgetInitialState);
	});

	it('should handle remove operation request', () => {
		expect(budgetReducer(budgetInitialState, removeOperationAction(operationMock))).toEqual(budgetInitialState);
	});

	it('should handle remove operation successful request', () => {
		const operation: Operation = operationMock;

		expect(budgetReducer({
			...budgetInitialState,
			operations: [operation],
			debit: operation.value
		}, removeOperationSuccessAction(operation))).toEqual(budgetInitialState);
	});

	it('should handle remove operation failure', () => {
		expect(budgetReducer(budgetInitialState, removeOperationFailureAction())).toEqual(budgetInitialState);
	});
});
