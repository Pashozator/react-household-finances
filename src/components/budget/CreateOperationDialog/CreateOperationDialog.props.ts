import { PostOperationRequestBody } from '../../../domain/endpoints/budget/operation.post.endpoint';

export interface CreateOperationDialogProps {
	open: boolean;
	onClose: () => void;
	onSubmit: (createOperationRequestBody: PostOperationRequestBody) => void;
}
