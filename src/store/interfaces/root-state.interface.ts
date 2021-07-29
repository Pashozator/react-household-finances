import { Goal } from '../../domain/interfaces/goal';
import { DialogsState } from './dialogs-state';
import { Budget } from '../../domain/interfaces/budget';

export interface RootState {
	budget: Budget;
	goals: Goal[];
	dialogs: DialogsState;
}
