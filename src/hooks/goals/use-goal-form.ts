import { useCallback, useState } from 'react';
import { FormikErrors } from 'formik';
import { Goal } from '../../domain/interfaces/goal';
import { GoalFormValues } from '../../interfaces/goal-form-values';

export function useGoalForm(): {
	initialValues: GoalFormValues;
	patchValues: (goal: Goal) => void;
	validate: (values: GoalFormValues) => FormikErrors<GoalFormValues>;
} {
	const [initialValues, setInitialValues] = useState<GoalFormValues>({
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
		(values: GoalFormValues): FormikErrors<GoalFormValues> => {
			const errors: FormikErrors<GoalFormValues> = {};

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
