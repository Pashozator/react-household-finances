import { Operation } from './operation';

export interface Budget {
	operations: Operation[];
	debit: number;
}