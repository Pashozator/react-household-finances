import { Goal } from '../../../domain/interfaces/goal';

export interface AddGoalDialogProps {
	open: boolean;
	onClose: () => void;
	onSubmit: (goal: Goal) => void;
}
