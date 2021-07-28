import React, { useEffect } from 'react';
import { HistoryProps } from './History.props';
import { Operation as OperationComponent } from '../../components/history/Operation/Operation';
import { useDispatch, useSelector } from 'react-redux';
import { selectDebit, selectOperations } from '../../store/selectors/budget.selectors';
import { Operation } from '../../domain/interfaces/operation';
import { getBudgetAction, removeOperationAction } from '../../store/actions/budget.actions';
import { openEditOperationDialogAction } from '../../store/actions/dialogs.actions';

export const History: React.FC<HistoryProps> = () => {
	const dispatch = useDispatch();
	const operations = useSelector(selectOperations);
	const debit = useSelector(selectDebit);

	const onOperationRemove = (operation: Operation) => dispatch(removeOperationAction(operation));

	const onOperationEdit = (operation: Operation)  => dispatch(openEditOperationDialogAction(operation));

	const onGetBudget = () => dispatch(getBudgetAction());

	useEffect(() => {
		onGetBudget();
	}, []);

	return (
		<div className="wrapper">
			<h3>Aktualny stan budżetu: {debit}</h3>
			{operations.map((operation, index) => (
				<OperationComponent operation={operation} key={index} onRemove={onOperationRemove}
						   onEdit={onOperationEdit}/>))}
		</div>
	);
}