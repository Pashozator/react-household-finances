import React from 'react';
import { OperationFormProps } from './OperationForm.props';
import { Formik } from 'formik';
import { Button, DialogActions, Input, TextField } from '@material-ui/core';

export const OperationForm: React.FC<OperationFormProps> = (props: OperationFormProps) => {
	const { initialValues, validate, cancel, submit } = props;

	return (
		<Formik
			enableReinitialize={true}
			initialValues={initialValues}
			validate={validate}
			onSubmit={submit}
		>
			{({
				  values,
				  setFieldValue,
				  handleSubmit,
			  }) => (
				<form onSubmit={handleSubmit}>
					<div className="dialog">
						<Input name="label"
							   inputProps={{ type: 'text' }}
							   placeholder="Label"
							   className="input"
							   value={values.label}
							   onChange={(e => setFieldValue(e.target.name, e.target.value))}
						/>
						<Input name="date"
							   inputProps={{ type: 'text' }}
							   placeholder="Date"
							   className="input"
							   value={values.date}
							   onChange={(e => setFieldValue(e.target.name, e.target.value))}
						/>
						<Input name="value"
							   inputProps={{ type: 'number' }}
							   placeholder="Value"
							   className="input"
							   value={values.value}
							   onChange={(e => setFieldValue(e.target.name, e.target.value))}
						/>
						<TextField name="description"
								   type="text"
								   multiline
								   placeholder="Description"
								   className="input"
								   value={values.description}
								   onChange={(e => setFieldValue(e.target.name, e.target.value))}
						/>
					</div>
					<DialogActions>
						<Button onClick={cancel} color="primary">
							Cancel
						</Button>
						<Button type="submit" color="primary" variant="contained">
							Save
						</Button>
					</DialogActions>
				</form>
			)}
		</Formik>
	);
};
