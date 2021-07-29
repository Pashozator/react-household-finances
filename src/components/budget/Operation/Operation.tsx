import React from 'react';
import './Operation.scss';
import { OperationProps } from './Operation.props';
import { Button, Card, CardActions, CardContent } from '@material-ui/core';

export const Operation: React.FC<OperationProps> = React.memo((props: OperationProps) => {
	const { className, operation, onRemove, onEdit } = props;

	const remove = () => onRemove(operation);

	const edit = () => onEdit(operation);

	return (
		<Card className={className}>
			<CardContent>
				<div className="content">
					<div className="label-date">
						<span className="date">{operation.date}</span>
						<span className="label">{operation.label}</span>
					</div>
					<span className="value">{operation.value}</span>
				</div>
				<div className="description">
					<p>{operation.description}</p>
				</div>
			</CardContent>
			<CardActions>
				<Button color="secondary" onClick={remove}>Delete</Button>
				<Button onClick={edit}>Edit</Button>
			</CardActions>
		</Card>
	);
});
