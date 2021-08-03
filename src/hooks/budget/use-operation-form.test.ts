import { act, renderHook } from '@testing-library/react-hooks';
import { useOperationForm } from './use-operation-form';
import { Operation } from '../../domain/interfaces/operation';
import { operationMock } from '../../mocks/opreration.mock';
import { OperationFormValues } from '../../interfaces/operation-form-values';

describe('useOperationForm', () => {
	it('should return initial values', () => {
		const { result } = renderHook(() => useOperationForm());

		expect(result.current.initialValues).toBeTruthy();
		expect(result.current.initialValues.label).toBe('');
		expect(result.current.initialValues.value).toBe('');
		expect(result.current.initialValues.description).toBe('');
		expect(result.current.initialValues.date).toBe('');
	});

	it('should patch values', () => {
		const operation: Operation = operationMock;
		const { result } = renderHook(() => useOperationForm());

		act(() => result.current.patchValues(operation));

		expect(result.current.initialValues).toBeTruthy();
		expect(result.current.initialValues.label).toBe(operation.label)
		expect(result.current.initialValues.value).toBe(operation.value.toString())
		expect(result.current.initialValues.description).toBe(operation.description)
		expect(result.current.initialValues.date).toBe(operation.date)
	});

	describe('validate', () => {
		const { result } = renderHook(() => useOperationForm());
		let values: OperationFormValues;

		beforeEach(() => {
			values = {
				label: 'label',
				value: '100',
				description: 'description',
				date: '2021-07-31'
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

		it('should return object with label error if date is empty string', () => {
			expect(result.current.validate({ ...values, date: '' }).date).toBeTruthy();
		});
	});
});
