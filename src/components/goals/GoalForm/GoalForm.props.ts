import { FormikErrors } from 'formik';
import { GoalFormValues } from '../../../interfaces/goal-form-values';

export interface GoalFormProps {
	initialValues: GoalFormValues;
	validate: (values: GoalFormValues) => FormikErrors<GoalFormValues>;
	submit: (values: GoalFormValues) => void;
	cancel: () => void;
}
