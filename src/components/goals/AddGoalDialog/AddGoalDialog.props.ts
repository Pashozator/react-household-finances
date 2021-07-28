import { DialogProps } from '@material-ui/core';

export interface AddGoalDialogProps extends DialogProps {
	onClose: (state?: any) => void;
}
