import { Operation } from '../../../domain/interfaces/operation';

export interface UpdateOperationDialogProps {
	open: boolean;
	operation: Operation;
	onClose: () => void;
	onSubmit: (operation: Operation) => void;
}
