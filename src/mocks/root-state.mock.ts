import { RootState } from '../store/interfaces/root-state.interface';
import { budgetMock } from './budget.mock';
import { goalMock } from './goal.mock';
import { dialogsStateMock } from './dialogs-state.mock';

export const rootStateMock: RootState = {
	budget: budgetMock,
	goals: [goalMock],
	dialogs: dialogsStateMock
}
