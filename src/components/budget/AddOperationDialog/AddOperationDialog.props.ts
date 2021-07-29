import { Operation } from '../../../domain/interfaces/operation';

export interface AddOperationDialogProps {
	open: boolean;
	onClose: () => void;
	onSubmit: (operation: Operation) => void;
}
