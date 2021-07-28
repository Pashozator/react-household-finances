import { FormikErrors, FormikHelpers } from 'formik';

export interface GoalFormProps {
	initialValues: any;
	validate: (values: any) => FormikErrors<any>;
	submit: (
		values: any,
		formikHelpers: FormikHelpers<any>,
	) => void | Promise<any>;
	cancel: () => void;
}
