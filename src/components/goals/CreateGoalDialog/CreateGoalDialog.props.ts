import { PostGoalRequestBody } from '../../../domain/endpoints/goals/goal.post.endpoint';

export interface CreateGoalDialogProps {
	open: boolean;
	onClose: () => void;
	onSubmit: (postGoalRequestBody: PostGoalRequestBody) => void;
}
