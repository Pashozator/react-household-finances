import React from 'react';
import { Operation } from '../../components/history/operation/Operation';

export class History extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<h3>Aktualny stan budżetu: 1000</h3>
				<Operation/>
			</div>
		);
	}
}
