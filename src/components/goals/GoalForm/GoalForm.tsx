import React from 'react';
import { Formik } from 'formik';
import { GoalFormProps } from './GoalForm.props';
import { Button, DialogActions, Input, TextField } from '@material-ui/core';
import { GoalFormElementsTestIds } from './GoalForm.helper';
import { GoalFormValues } from '../../../interfaces/goal-form-values';

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
							   inputProps={{ type: 'text', 'data-testid': GoalFormElementsTestIds.INPUT_LABEL }}
							   placeholder="Label"
							   className="input"
							   value={values.label}
							   onChange={(e => setFieldValue(e.target.name, e.target.value))}
						/>
						<Input name="value"
							   inputProps={{ type: 'number', 'data-testid': GoalFormElementsTestIds.INPUT_VALUE }}
							   placeholder="Value"
							   className="input"
							   value={values.value}
							   onChange={(e => setFieldValue(e.target.name, e.target.value))}
						/>
						<TextField name="description"
								   inputProps={{ type: 'text', 'data-testid': GoalFormElementsTestIds.INPUT_DESCRIPTION }}
								   multiline
								   placeholder="Description"
								   value={values.description}
								   className="input"
								   onChange={(e => setFieldValue(e.target.name, e.target.value))}
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
