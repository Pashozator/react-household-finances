import { Goal } from '../../../domain/interfaces/goal';
import { PutGoalRequestBody } from '../../../domain/endpoints/goals/goal.put.endpoint';

export interface UpdateGoalDialogProps {
	open: boolean;
	goal: Goal;
	onClose: () => void;
	onSubmit: (id: string, putGoalRequestBody: PutGoalRequestBody) => void;
}
