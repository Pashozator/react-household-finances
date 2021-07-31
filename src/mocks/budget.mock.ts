import { Budget } from '../domain/interfaces/budget';
import { operationMock } from './opreration.mock';

export const budgetMock: Budget = {
	operations: [operationMock],
	debit: operationMock.value
}
