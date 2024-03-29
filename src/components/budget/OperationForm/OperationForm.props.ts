import { FormikErrors, FormikHelpers } from 'formik';
import { OperationFormValues } from '../../../interfaces/operation-form-values';

export interface OperationFormProps {
	initialValues: OperationFormValues;
	validate: (values: OperationFormValues) => FormikErrors<OperationFormValues>;
	submit: (values: OperationFormValues) => void;
	cancel: () => void;
}
