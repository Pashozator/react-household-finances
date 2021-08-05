import React, { useEffect } from 'react';
import { Operation as OperationComponent } from '../../components/budget/Operation/Operation';
import { useDispatch, useSelector } from 'react-redux';
import { selectDebit, selectOperations } from '../../store/selectors/budget/budget.selectors';
import { Operation } from '../../domain/interfaces/operation';
import { getBudgetAction, removeOperationAction } from '../../store/actions/budget.actions';
import { openCreateOperationDialogAction, openUpdateOperationDialogAction } from '../../store/actions/dialogs.actions';
import { Fab, Icon } from '@material-ui/core';

export const BudgetView: React.FC = React.memo(() => {
	const dispatch = useDispatch();
	const operations = useSelector(selectOperations);
	const debit = useSelector(selectDebit);

	const openAddOperationDialog = () => dispatch(openCreateOperationDialogAction());

	const onOperationRemove = (operation: Operation) => dispatch(removeOperationAction(operation));

	const onOperationEdit = (operation: Operation) => dispatch(openUpdateOperationDialogAction(operation));

	const onGetBudget = () => dispatch(getBudgetAction());

	useEffect(() => {
		onGetBudget();
	}, []);

	return (
		<div className="wrapper">
			<h3>Debit: {debit}</h3>
			{operations.map((operation, index) => (
				<OperationComponent className="margin-top-10-not-on-first" operation={operation} key={index}
									onRemove={onOperationRemove}
									onUpdate={onOperationEdit}/>))}

			<Fab color="primary" className="fab" onClick={openAddOperationDialog}>
				<Icon>
					add_circle
				</Icon>
			</Fab>
		</div>
	);
});
