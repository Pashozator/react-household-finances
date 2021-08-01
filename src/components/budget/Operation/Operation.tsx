import React from 'react';
import './Operation.scss';
import { OperationProps } from './Operation.props';
import { Button, Card, CardActions, CardContent } from '@material-ui/core';
import { OperationElementsTestIds } from './Operation.helper';

export const Operation: React.FC<OperationProps> = React.memo((props: OperationProps) => {
	const { className, operation, onRemove, onUpdate } = props;

	const remove = () => onRemove(operation);

	const update = () => onUpdate(operation);

	return (
		<Card data-testid={OperationElementsTestIds.ROOT} className={className}>
			<CardContent>
				<div className="content">
					<div className="label-date">
						<span data-testid={OperationElementsTestIds.DATE} className="date">{operation.date}</span>
						<span data-testid={OperationElementsTestIds.LABEL} className="label">{operation.label}</span>
					</div>
					<span data-testid={OperationElementsTestIds.VALUE} className="value">{operation.value}</span>
				</div>
				<div className="description">
					<p data-testid={OperationElementsTestIds.DESCRIPTION}>{operation.description}</p>
				</div>
			</CardContent>
			<CardActions>
				<Button data-testid={OperationElementsTestIds.REMOVE_BUTTON} color="secondary" onClick={remove}>Remove</Button>
				<Button data-testid={OperationElementsTestIds.UPDATE_BUTTON} onClick={update}>Update</Button>
			</CardActions>
		</Card>
	);
});
