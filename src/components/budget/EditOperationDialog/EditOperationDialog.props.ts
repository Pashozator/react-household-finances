import { Operation } from '../../../domain/interfaces/operation';

export interface EditOperationDialogProps {
	open: boolean;
	operation: Operation;
	onClose: () => void;
	onSubmit: (operation: Operation) => void;
}
