import { Operation } from '../../../domain/interfaces/operation';

export interface OperationProps {
	operation: Operation;
	onRemove: (operation: Operation) => void;
	onUpdate: (operation: Operation) => void;
	className?: string;
}
