import { BudgetState } from './budget-state.interface';
import { Goal } from '../../domain/interfaces/goal';

export interface RootState {
	budget: BudgetState;
	goals: Goal[];
}
