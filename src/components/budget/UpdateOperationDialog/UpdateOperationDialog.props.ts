import { Operation } from '../../../domain/interfaces/operation';
import { PutOperationRequestBody } from '../../../domain/endpoints/budget/operation.put.endpoint';

export interface UpdateOperationDialogProps {
	open: boolean;
	operation: Operation;
	onClose: () => void;
	onSubmit: (id: string, updateOperationRequestBody: PutOperationRequestBody) => void;
}
