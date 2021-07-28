import { DialogProps } from '@material-ui/core';

export interface AddOperationDialogProps extends DialogProps {
	onClose: (state?: any) => void;
}
