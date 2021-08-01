import { fireEvent, render, screen } from '@testing-library/react';
import { Goal as GoalComponent } from './Goal';
import { Goal } from '../../../domain/interfaces/goal';
import { goalMock } from '../../../mocks/goal.mock';
import { GoalElementsTestIds } from './Goal.helper';

describe('Goal', () => {
	let goal: Goal;
	let debit: number;
	let update: jest.Mock;
	let remove: jest.Mock;
	let realize: jest.Mock;

	beforeEach(() => {
		goal = goalMock;
		debit = 100;
		update = jest.fn();
		remove = jest.fn();
		realize = jest.fn();
	});

	it('should display goal data', () => {
		render(<GoalComponent goal={goal} debit={debit} onRemove={remove} onRealize={realize} onUpdate={update}/>);

		expect(screen.getByTestId(GoalElementsTestIds.LABEL)).toHaveTextContent(goal.label);
		expect(screen.getByTestId(GoalElementsTestIds.DESCRIPTION)).toHaveTextContent(goal.description);
		expect(screen.getByTestId(GoalElementsTestIds.VALUE)).toHaveTextContent(goal.value.toString());
		expect(screen.getByTestId(GoalElementsTestIds.VALUE_LEFT_TO_ACHIEVE)).toHaveTextContent((goal.value - debit).toString());
	});

	it('should display icon and realized label when goal is realized', () => {
		goal = { ...goal, realized: true };
		render(<GoalComponent goal={goal} debit={debit} onRemove={remove} onRealize={realize} onUpdate={update}/>);

		expect(screen.getByTestId(GoalElementsTestIds.ICON)).toBeDefined();
		expect(screen.getByTestId(GoalElementsTestIds.REALIZED_LABEL)).toBeDefined();
	});

	it('should emit remove function when remove button is clicked', () => {
		render(<GoalComponent goal={goal} debit={debit} onRemove={remove} onRealize={realize} onUpdate={update}/>);

		fireEvent.click(screen.getByTestId(GoalElementsTestIds.REMOVE_BUTTON));

		expect(remove).toHaveBeenCalledWith(goal);
	});

	it('should emit update function when update button is clicked', () => {
		render(<GoalComponent goal={goal} debit={debit} onRemove={remove} onRealize={realize} onUpdate={update}/>);

		fireEvent.click(screen.getByTestId(GoalElementsTestIds.UPDATE_BUTTON));

		expect(update).toHaveBeenCalledWith(goal);
	});

	it('should emit realize function when realize button is clicked', () => {
		render(<GoalComponent goal={goal} debit={debit} onRemove={remove} onRealize={realize} onUpdate={update}/>);

		fireEvent.click(screen.getByTestId(GoalElementsTestIds.REALIZE_BUTTON));

		expect(realize).toHaveBeenCalledWith(goal);
	});

	it('should attach class to root element', () => {
		const className = 'test-classname';
		render(<GoalComponent className={className} goal={goal} debit={debit} onRemove={remove} onRealize={realize} onUpdate={update}/>);

		expect(screen.getByTestId(GoalElementsTestIds.ROOT).className.includes(className)).toBe(true);
	});
});
