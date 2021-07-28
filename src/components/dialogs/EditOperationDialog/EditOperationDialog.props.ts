import { DialogProps } from '@material-ui/core';
import { Operation } from '../../../domain/interfaces/operation';

export interface EditOperationDialogProps extends DialogProps {
	operation: Operation;
	onClose: (state?: any) => void;
}
