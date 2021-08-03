import React from 'react';
import { OperationFormProps } from './OperationForm.props';
import { Formik } from 'formik';
import { Button, DialogActions, Input, TextField } from '@material-ui/core';
import { OperationFormElementsTestIds } from './OperationForm.helper';
import { OperationFormValues } from '../../../interfaces/operation-form-values';

export const OperationForm: React.FC<OperationFormProps> = React.memo((props: OperationFormProps) => {
	const { initialValues, validate, cancel, submit } = props;

	const handleSubmit = (values: OperationFormValues) => submit(values);

	return (
		<Formik
			enableReinitialize={true}
			initialValues={initialValues}
			validate={validate}
			onSubmit={handleSubmit}
		>
			{({
				  values,
				  setFieldValue,
				  handleSubmit,
			  }) => (
				<form onSubmit={handleSubmit}>
					<div className="dialog">
						<Input name="label"
							   inputProps={{ type: 'text', 'data-testid': OperationFormElementsTestIds.INPUT_LABEL }}
							   placeholder="Label"
							   className="input"
							   value={values.label}
							   onChange={(e => setFieldValue(e.target.name, e.target.value))}
						/>
						<Input name="date"
							   inputProps={{ type: 'date', 'data-testid': OperationFormElementsTestIds.INPUT_DATE }}
							   placeholder="Date"
							   className="input"
							   value={values.date}
							   onChange={(e => setFieldValue(e.target.name, e.target.value))}
						/>
						<Input name="value"
							   inputProps={{ type: 'number', 'data-testid': OperationFormElementsTestIds.INPUT_VALUE }}
							   placeholder="Value"
							   className="input"
							   value={values.value}
							   onChange={(e => setFieldValue(e.target.name, e.target.value))}
						/>
						<TextField name="description"
								   inputProps={{ type: 'text', 'data-testid': OperationFormElementsTestIds.INPUT_DESCRIPTION }}
								   type="text"
								   multiline
								   placeholder="Description"
								   className="input"
								   value={values.description}
								   onChange={(e => setFieldValue(e.target.name, e.target.value))}
						/>
					</div>
					<DialogActions>
						<Button onClick={cancel} color="primary" data-testid={OperationFormElementsTestIds.CANCEL_BUTTON}>
							Cancel
						</Button>
						<Button type="submit" color="primary" variant="contained" data-testid={OperationFormElementsTestIds.SAVE_BUTTON}>
							Save
						</Button>
					</DialogActions>
				</form>
			)}
		</Formik>
	);
});
