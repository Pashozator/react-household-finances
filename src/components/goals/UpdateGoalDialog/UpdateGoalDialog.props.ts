import { Goal } from '../../../domain/interfaces/goal';
import { UpdateGoalEndpointRequestBody } from '../../../domain/endpoints/goals/update-goal.endpoint';

export interface UpdateGoalDialogProps {
	open: boolean;
	goal: Goal;
	onClose: () => void;
	onSubmit: (id: string, putGoalRequestBody: UpdateGoalEndpointRequestBody) => void;
}
