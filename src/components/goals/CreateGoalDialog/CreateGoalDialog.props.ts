import { CreateGoalEndpointRequestBody } from '../../../domain/endpoints/goals/create-goal.endpoint';

export interface CreateGoalDialogProps {
	open: boolean;
	onClose: () => void;
	onSubmit: (postGoalRequestBody: CreateGoalEndpointRequestBody) => void;
}
