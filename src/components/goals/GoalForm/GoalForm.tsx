import React from 'react';
import { Formik } from 'formik';
import { GoalFormProps } from './GoalForm.props';
import { Button, DialogActions } from '@material-ui/core';
import { GoalFormElementsTestIds } from './GoalForm.helper';
import { GoalFormValues } from '../../../interfaces/goal-form-values';
import { Input } from '../../shared/Input/Input';

export const GoalForm: React.FC<GoalFormProps> = React.memo((props: GoalFormProps) => {
	const { initialValues, validate, cancel, submit } = props;

	const handleSubmit = (values: GoalFormValues) => submit(values);

	return (
		<Formik
			enableReinitialize={true}
			initialValues={initialValues}
			validate={validate}
			onSubmit={handleSubmit}
		>
			{({ values, setFieldValue, handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<div className="dialog">
						<Input name="label"
							   label="Label"
							   className="input"
							   value={values.label}
							   testId={GoalFormElementsTestIds.INPUT_LABEL}
							   onChange={setFieldValue}
						/>
						<Input name="value"
							   label="Value"
							   type="number"
							   className="input"
							   value={values.value}
							   testId={GoalFormElementsTestIds.INPUT_VALUE}
							   onChange={setFieldValue}
						/>
						<Input name="description"
							   label="Description"
							   value={values.description}
							   className="input"
							   testId={GoalFormElementsTestIds.INPUT_DESCRIPTION}
							   onChange={setFieldValue}
						/>
					</div>
					<DialogActions>
						<Button onClick={cancel} color="primary" data-testid={GoalFormElementsTestIds.CANCEL_BUTTON}>
							Cancel
						</Button>
						<Button type="submit" color="primary" variant="contained"
								data-testid={GoalFormElementsTestIds.SAVE_BUTTON}>
							Save
						</Button>
					</DialogActions>
				</form>
			)}
		</Formik>
	);
});
