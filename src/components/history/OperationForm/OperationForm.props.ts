import { FormikErrors, FormikHelpers } from 'formik';

export interface OperationFormProps {
	initialValues: any;
	validate: (values: any) => FormikErrors<any>;
	submit: (
		values: any,
		formikHelpers: FormikHelpers<any>,
	) => void | Promise<any>;
	cancel: () => void;
}
