import { Goal } from '../../../domain/interfaces/goal';

export interface GoalProps {
	goal: Goal;
	debit: number;
	onEdit: (goal: Goal) => void;
	onRemove: (goal: Goal) => void;
	onRealize: (goal: Goal) => void;
}
