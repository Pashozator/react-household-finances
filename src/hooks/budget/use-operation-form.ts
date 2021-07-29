import { useCallback, useState } from 'react';
import { FormikErrors } from 'formik';
import { Operation } from '../../domain/interfaces/operation';

export function useOperationForm(): {
	initialValues: any;
	patchValues: (operation: Operation) => void;
	validate: (values: any) => FormikErrors<any>;
} {
	const [initialValues, setInitialValues] = useState({
		label: '',
		value: '',
		description: '',
		date: '',
	});

	const patchValues = useCallback(
		(operation: Operation): void => {
			setInitialValues({
				label: operation.label,
				value: operation.value.toString(),
				description: operation.description,
				date: operation.date,
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

			if (!values.date) {
				errors.value = 'Date is required.';
			}

			return errors;
		},
		[],
	);

	return { initialValues, patchValues, validate };
}
