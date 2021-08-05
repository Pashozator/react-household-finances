import { useCallback, useState } from 'react';
import { FormikErrors } from 'formik';
import { Operation } from '../../domain/interfaces/operation';
import { OperationFormValues } from '../../interfaces/operation-form-values';

export function useOperationForm(): {
	initialValues: OperationFormValues;
	patchValues: (operation: Operation) => void;
	validate: (values: OperationFormValues) => FormikErrors<OperationFormValues>;
} {
	const [initialValues, setInitialValues] = useState<OperationFormValues>({
		label: null,
		value: null,
		description: null,
		date: null
	});

	const patchValues = useCallback(
		(operation: Operation): void => {
			setInitialValues({
				label: operation.label,
				value: operation.value,
				description: operation.description,
				date: new Date(operation.date),
			});
		},
		[setInitialValues],
	);

	const validate = useCallback(
		(values: OperationFormValues): FormikErrors<OperationFormValues> => {
			const errors: FormikErrors<OperationFormValues> = {};

			if (!values.label) {
				errors.label = 'Label is required.';
			}

			if (!values.description) {
				errors.description = 'Description is required.';
			}

			if (!values.value) {
				errors.value = 'Value is required.';
			}

			if (!values.date) {
				errors.date = 'Date is required.';
			}

			return errors;
		},
		[],
	);

	return { initialValues, patchValues, validate };
}
