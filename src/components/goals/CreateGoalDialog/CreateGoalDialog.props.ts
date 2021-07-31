import { Goal } from '../../../domain/interfaces/goal';

export interface CreateGoalDialogProps {
	open: boolean;
	onClose: () => void;
	onSubmit: (goal: Goal) => void;
}
