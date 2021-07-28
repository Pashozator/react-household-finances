import { DialogProps } from '@material-ui/core';

export interface ErrorDialogProps extends DialogProps {
	onClose: (state?: any) => void;
}
