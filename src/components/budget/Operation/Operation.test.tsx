import { render, screen, fireEvent } from '@testing-library/react';
import { Operation as OperationComponent } from './Operation';
import { operationMock } from '../../../mocks/opreration.mock';
import { Operation } from '../../../domain/interfaces/operation';
import { OperationElementsTestIds } from './Operation.helper';

describe('Operation', () => {
	let operation: Operation;
	let update: jest.Mock;
	let remove: jest.Mock;

	beforeEach(() => {
		operation = operationMock;
		update = jest.fn();
		remove = jest.fn();
	});

	it('should display operation data', () => {
		render(<OperationComponent operation={operation} onUpdate={update} onRemove={remove}/>);

		expect(screen.getByTestId(OperationElementsTestIds.DATE)).toHaveTextContent(operation.date);
		expect(screen.getByTestId(OperationElementsTestIds.LABEL)).toHaveTextContent(operation.label);
		expect(screen.getByTestId(OperationElementsTestIds.VALUE)).toHaveTextContent(operation.value.toString());
		expect(screen.getByTestId(OperationElementsTestIds.DESCRIPTION)).toHaveTextContent(operation.description);
	});

	it('should emit remove function when remove button is clicked', () => {
		render(<OperationComponent operation={operation} onUpdate={update} onRemove={remove}/>);

		fireEvent.click(screen.getByTestId(OperationElementsTestIds.REMOVE_BUTTON));

		expect(remove).toHaveBeenCalledWith(operation);
	});

	it('should emit update function when update button is clicked', () => {
		render(<OperationComponent operation={operation} onUpdate={update} onRemove={remove}/>);

		fireEvent.click(screen.getByTestId(OperationElementsTestIds.UPDATE_BUTTON));

		expect(update).toHaveBeenCalledWith(operation);
	});

	it('should attach class to root element', () => {
		const className = "test-classname";
		render(<OperationComponent className={className} operation={operation} onUpdate={update} onRemove={remove}/>);

		expect(screen.getByTestId(OperationElementsTestIds.ROOT).className.includes(className)).toBe(true);
	});
});
