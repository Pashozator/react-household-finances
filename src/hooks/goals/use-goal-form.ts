import { useCallback, useState } from 'react';
import { FormikErrors } from 'formik';
import { Goal } from '../../domain/interfaces/goal';

export function useGoalForm(): {
	initialValues: any;
	patchValues: (goal: Goal) => void;
	validate: (values: any) => FormikErrors<any>;
} {
	const [initialValues, setInitialValues] = useState({
		label: '',
		value: '',
		description: '',
	});

	const patchValues = useCallback(
		(goal: Goal): void => {
			setInitialValues({
				label: goal.label,
				value: goal.value.toString(),
				description: goal.description,
			});
		},
		[setInitialValues],
	);

	const validate = useCallback(
		(values: any): FormikErrors<any> => {
			const errors: any = {};

			if (!values.label) {
				errors.label = 'Label is required.';
			}

			if (!values.description) {
				errors.description =
					'Description is required.';
			}

			if (!values.value) {
				errors.value = 'Value is required.';
			}

			return errors;
		},
		[],
	);

	return { initialValues, patchValues, validate };
}
