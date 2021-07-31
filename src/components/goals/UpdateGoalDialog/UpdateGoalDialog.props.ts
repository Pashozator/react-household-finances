import { Goal } from '../../../domain/interfaces/goal';

export interface UpdateGoalDialogProps {
	open: boolean;
	goal: Goal;
	onClose: () => void;
	onSubmit: (goal: Goal) => void;
}
