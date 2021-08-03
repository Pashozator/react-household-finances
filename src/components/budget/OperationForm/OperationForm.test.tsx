import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { OperationFormValues } from '../../../interfaces/operation-form-values';
import { OperationForm } from './OperationForm';
import { OperationFormElementsTestIds } from './OperationForm.helper';
import { defaultOperationFormValuesMock } from '../../../mocks/default-operation-form-values.mock';

describe('OperationForm', () => {
	let initialValues: OperationFormValues;
	let validate: jest.Mock;
	let cancel: jest.Mock;
	let submit: jest.Mock;

	beforeEach(() => {
		initialValues = defaultOperationFormValuesMock;
		validate = jest.fn();
		cancel = jest.fn();
		submit = jest.fn();
	});

	it('should display inputs initial values', () => {
		render(<OperationForm initialValues={initialValues} validate={validate} submit={submit} cancel={cancel}/>);

		expect(screen.getByTestId(OperationFormElementsTestIds.INPUT_LABEL)).toHaveTextContent(initialValues.label);
		expect(screen.getByTestId(OperationFormElementsTestIds.INPUT_VALUE)).toHaveTextContent(initialValues.value);
		expect(screen.getByTestId(OperationFormElementsTestIds.INPUT_DATE)).toHaveTextContent(initialValues.date);
		expect(screen.getByTestId(OperationFormElementsTestIds.INPUT_DESCRIPTION)).toHaveTextContent(initialValues.description);
	});

	it('should emit cancel function when cancel button is clicked', () => {
		render(<OperationForm initialValues={initialValues} validate={validate} submit={submit} cancel={cancel}/>);

		fireEvent.click(screen.getByTestId(OperationFormElementsTestIds.CANCEL_BUTTON));

		expect(cancel).toHaveBeenCalled();
	});

	it('should submit form', async () => {
		const label: string = 'operation label';
		const value: string = '100';
		const date: string = '2021-12-12';
		const description: string = 'operation description';

		render(<OperationForm initialValues={initialValues} validate={validate} submit={submit} cancel={cancel}/>);

		userEvent.type(screen.getByTestId(OperationFormElementsTestIds.INPUT_LABEL), label);
		userEvent.type(screen.getByTestId(OperationFormElementsTestIds.INPUT_VALUE), value);
		userEvent.type(screen.getByTestId(OperationFormElementsTestIds.INPUT_DATE), date);
		userEvent.type(screen.getByTestId(OperationFormElementsTestIds.INPUT_DESCRIPTION), description);

		userEvent.click(screen.getByTestId(OperationFormElementsTestIds.SAVE_BUTTON));

		await waitFor(() => expect(submit).toHaveBeenCalledWith({ label, value, date, description }));
	});
});
