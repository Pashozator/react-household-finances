import { Operation } from '../../../domain/interfaces/operation';
import { UpdateOperationEndpointRequestBody } from '../../../domain/endpoints/budget/update-operation.endpoint';

export interface UpdateOperationDialogProps {
	open: boolean;
	operation: Operation;
	onClose: () => void;
	onSubmit: (id: string, updateOperationRequestBody: UpdateOperationEndpointRequestBody) => void;
}
