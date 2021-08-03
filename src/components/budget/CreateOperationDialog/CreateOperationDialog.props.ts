import { CreateOperationEndpointRequestBody } from '../../../domain/endpoints/budget/create-operation.endpoint';

export interface CreateOperationDialogProps {
	open: boolean;
	onClose: () => void;
	onSubmit: (createOperationRequestBody: CreateOperationEndpointRequestBody) => void;
}
