import { Operation } from '../../../domain/interfaces/operation';

export interface CreateOperationDialogProps {
	open: boolean;
	onClose: () => void;
	onSubmit: (operation: Operation) => void;
}
