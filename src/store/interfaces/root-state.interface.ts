import { BudgetState } from './budget-state.interface';
import { Goal } from '../../domain/interfaces/goal';
import { DialogsState } from './dialogs-state';

export interface RootState {
	budget: BudgetState;
	goals: Goal[];
	dialogs: DialogsState;
}
