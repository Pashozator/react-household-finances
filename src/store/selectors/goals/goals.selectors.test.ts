import { RootState } from '../../interfaces/root-state.interface';
import { rootStateMock } from '../../../mocks/root-state.mock';
import { selectGoals } from './goals.selectors';

describe('goals selectors', () => {
	const state: RootState = rootStateMock;

	it('should select goals', () => {
		expect(selectGoals(state)).toEqual(state.goals);
	});
});
