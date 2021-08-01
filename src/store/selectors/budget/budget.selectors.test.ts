import { RootState } from '../../interfaces/root-state.interface';
import { rootStateMock } from '../../../mocks/root-state.mock';
import { selectBudget, selectDebit, selectOperations } from './budget.selectors';

describe('budget selectors', () => {
	const state: RootState = rootStateMock;

	it('should select budget', () => {
		expect(selectBudget(state)).toEqual(state.budget);
	});

	it('should select budget operations', () => {
		expect(selectOperations(state)).toEqual(state.budget.operations);
	});

	it('should select budget debit', () => {
		expect(selectDebit(state)).toEqual(state.budget.debit);
	});
});
