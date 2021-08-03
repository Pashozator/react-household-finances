import { act, renderHook } from '@testing-library/react-hooks';
import { useGoalForm } from './use-goal-form';
import { Goal } from '../../domain/interfaces/goal';
import { goalMock } from '../../mocks/goal.mock';
import { GoalFormValues } from '../../interfaces/goal-form-values';

describe('useGoalForm', () => {
	it('should return initial values', () => {
		const { result } = renderHook(() => useGoalForm());

		expect(result.current.initialValues).toBeTruthy();
		expect(result.current.initialValues.label).toBe('');
		expect(result.current.initialValues.value).toBe('');
		expect(result.current.initialValues.description).toBe('');
	});

	it('should patch values', () => {
		const goal: Goal = goalMock;
		const { result } = renderHook(() => useGoalForm());

		act(() => result.current.patchValues(goal));

		expect(result.current.initialValues).toBeTruthy();
		expect(result.current.initialValues.label).toBe(goal.label)
		expect(result.current.initialValues.value).toBe(goal.value.toString())
		expect(result.current.initialValues.description).toBe(goal.description)
	});

	describe('validate', () => {
		const { result } = renderHook(() => useGoalForm());
		let values: GoalFormValues;

		beforeEach(() => {
			values = {
				label: 'label',
				value: '100',
				description: 'description'
			};
		});

		it('should return empty object if there is no validation error', () => {
			expect(result.current.validate(values)).toEqual({});
		});

		it('should return object with label error if label is empty string', () => {
			expect(result.current.validate({ ...values, label: '' }).label).toBeTruthy();
		});

		it('should return object with label error if value is empty string', () => {
			expect(result.current.validate({ ...values, value: '' }).value).toBeTruthy();
		});

		it('should return object with label error if description is empty string', () => {
			expect(result.current.validate({ ...values, description: '' }).description).toBeTruthy();
		});
	});
});
