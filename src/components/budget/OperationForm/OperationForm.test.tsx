import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { OperationFormValues } from '../../../interfaces/operation-form-values';
import { OperationForm } from './OperationForm';
import { OperationFormElementsTestIds } from './OperationForm.helper';
import { defaultOperationFormValuesMock } from '../../../mocks/default-operation-form-values.mock';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

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
		render(
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<OperationForm initialValues={initialValues} validate={validate} submit={submit} cancel={cancel}/>
			</MuiPickersUtilsProvider>
		);

		expect(screen.getByTestId(OperationFormElementsTestIds.INPUT_LABEL)).toHaveTextContent('');
		expect(screen.getByTestId(OperationFormElementsTestIds.INPUT_VALUE)).toHaveTextContent('');
		expect(screen.getByTestId(OperationFormElementsTestIds.INPUT_DATE)).toHaveTextContent('');
		expect(screen.getByTestId(OperationFormElementsTestIds.INPUT_DESCRIPTION)).toHaveTextContent('');
	});

	it('should emit cancel function when cancel button is clicked', () => {
		render(
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<OperationForm initialValues={initialValues} validate={validate} submit={submit} cancel={cancel}/>
			</MuiPickersUtilsProvider>
		);

		fireEvent.click(screen.getByTestId(OperationFormElementsTestIds.CANCEL_BUTTON));

		expect(cancel).toHaveBeenCalled();
	});

	it('should submit form', async () => {
		const label: string = 'operation label';
		const value: string = '100';
		const date: Date = new Date('2021-08-03');
		const description: string = 'operation description';

		initialValues = { ...initialValues, date }

		render(
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<OperationForm initialValues={initialValues} validate={validate} submit={submit} cancel={cancel}/>
			</MuiPickersUtilsProvider>
		);

		userEvent.type(screen.getByTestId(OperationFormElementsTestIds.INPUT_LABEL), label);
		userEvent.type(screen.getByTestId(OperationFormElementsTestIds.INPUT_VALUE), value);
		userEvent.type(screen.getByTestId(OperationFormElementsTestIds.INPUT_DESCRIPTION), description);

		userEvent.click(screen.getByTestId(OperationFormElementsTestIds.SAVE_BUTTON));

		await waitFor(() => expect(submit).toHaveBeenCalledWith({
			label,
			value: parseFloat(value),
			date: new Date(date),
			description
		}));
	});
});
