import { DialogProps } from '@material-ui/core';
import { Goal } from '../../../domain/interfaces/goal';

export interface EditGoalDialogProps extends DialogProps {
	goal: Goal;
	onClose: (state?: any) => void;
}
