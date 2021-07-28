import { Operation } from '../../../domain/interfaces/operation';

export interface OperationProps {
	operation: Operation;
	onRemove: (operation: Operation) => void;
	onEdit: (operation: Operation) => void;
}
