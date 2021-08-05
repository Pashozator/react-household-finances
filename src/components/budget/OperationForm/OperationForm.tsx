import React, { useRef } from 'react';
import { OperationFormProps } from './OperationForm.props';
import { Formik } from 'formik';
import { Button, DialogActions } from '@material-ui/core';
import { OperationFormElementsTestIds } from './OperationForm.helper';
import { OperationFormValues } from '../../../interfaces/operation-form-values';
import { Input } from '../../shared/Input/Input';
import { DatePicker } from '../../shared/DatePicker/DatePicker';

export const OperationForm: React.FC<OperationFormProps> = React.memo((props: OperationFormProps) => {
	const { initialValues, validate, cancel, submit } = props;
	const today = useRef(new Date());

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
							   label="Label"
							   className="input"
							   testId={OperationFormElementsTestIds.INPUT_LABEL}
							   value={values.label}
							   onChange={setFieldValue}
						/>
						<DatePicker
							name="date"
							label="Date"
							className="input"
							testId={OperationFormElementsTestIds.INPUT_DATE}
							maxDate={today.current}
							value={values.date}
							onChange={setFieldValue}
						/>
						<Input name="value"
							   label="Value"
							   className="input"
							   type="number"
							   testId={OperationFormElementsTestIds.INPUT_VALUE}
							   value={values.value}
							   onChange={setFieldValue}
						/>
						<Input name="description"
							   label="Description"
							   className="input"
							   testId={OperationFormElementsTestIds.INPUT_DESCRIPTION}
							   value={values.description}
							   onChange={setFieldValue}
						/>
					</div>
					<DialogActions>
						<Button onClick={cancel} color="primary"
								data-testid={OperationFormElementsTestIds.CANCEL_BUTTON}>
							Cancel
						</Button>
						<Button type="submit" color="primary" variant="contained"
								data-testid={OperationFormElementsTestIds.SAVE_BUTTON}>
							Save
						</Button>
					</DialogActions>
				</form>
			)}
		</Formik>
	);
});
