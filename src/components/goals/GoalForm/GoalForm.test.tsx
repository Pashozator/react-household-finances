import { GoalFormValues } from '../../../interfaces/goal-form-values';
import { defaultGoalFormValuesMock } from '../../../mocks/default-goal-form-values.mock';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { GoalForm } from './GoalForm';
import { GoalFormElementsTestIds } from './GoalForm.helper';
import userEvent from '@testing-library/user-event';

describe('GoalForm', () => {
	let initialValues: GoalFormValues;
	let validate: jest.Mock;
	let cancel: jest.Mock;
	let submit: jest.Mock;

	beforeEach(() => {
		initialValues = defaultGoalFormValuesMock;
		validate = jest.fn();
		cancel = jest.fn();
		submit = jest.fn();
	});

	it('should display inputs initial values', () => {
		render(<GoalForm initialValues={initialValues} validate={validate} submit={submit} cancel={cancel}/>);

		expect(screen.getByTestId(GoalFormElementsTestIds.INPUT_LABEL)).toHaveTextContent(initialValues.label);
		expect(screen.getByTestId(GoalFormElementsTestIds.INPUT_VALUE)).toHaveTextContent(initialValues.value);
		expect(screen.getByTestId(GoalFormElementsTestIds.INPUT_DESCRIPTION)).toHaveTextContent(initialValues.description);
	});

	it('should emit cancel function when cancel button is clicked', () => {
		render(<GoalForm initialValues={initialValues} validate={validate} submit={submit} cancel={cancel}/>);

		fireEvent.click(screen.getByTestId(GoalFormElementsTestIds.CANCEL_BUTTON));

		expect(cancel).toHaveBeenCalled();
	});

	it('should submit form', async () => {
		const label: string = 'goal label';
		const value: string = '100';
		const description: string = 'goal description';

		render(<GoalForm initialValues={initialValues} validate={validate} submit={submit} cancel={cancel}/>);

		userEvent.type(screen.getByTestId(GoalFormElementsTestIds.INPUT_LABEL), label);
		userEvent.type(screen.getByTestId(GoalFormElementsTestIds.INPUT_VALUE), value);
		userEvent.type(screen.getByTestId(GoalFormElementsTestIds.INPUT_DESCRIPTION), description);

		userEvent.click(screen.getByTestId(GoalFormElementsTestIds.SAVE_BUTTON));

		await waitFor(() => expect(submit).toHaveBeenCalledWith({ label, value, description }));
	});
});
