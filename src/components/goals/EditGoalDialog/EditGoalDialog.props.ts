import { Goal } from '../../../domain/interfaces/goal';

export interface EditGoalDialogProps {
	open: boolean;
	goal: Goal;
	onClose: () => void;
	onSubmit: (goal: Goal) => void;
}
