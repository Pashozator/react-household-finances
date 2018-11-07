import React from 'react';
import PropTypes from 'prop-types';
import Operation from '../../components/history/operation/Operation';
import * as BudgetActions from '../../store/actions/budget.actions';
import { connect } from 'react-redux';

class History extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="wrapper">
				<h3>Aktualny stan budżetu: {this.props.debit}</h3>
				{this.props.operations.map((operation, index) => (
					<Operation operation={operation} key={index} onRemove={this.props.onOperationRemove}
							   onEdit={this.props.onOperationEdit}/>))}
			</div>
		);
	}
}

History.propTypes = {
	debit: PropTypes.number.isRequired,
	operations: PropTypes.array.isRequired,
	onOperationRemove: PropTypes.func.isRequired,
	onOperationEdit: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		debit: state.budget.debit,
		operations: state.budget.operations
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onOperationRemove: operation => dispatch({
			type: BudgetActions.REMOVE_OPERATION,
			payload: operation
		}),
		onOperationEdit: operation => dispatch({
			type: BudgetActions.EDIT_OPERATION,
			payload: operation
		})
	}
};

export const VisibleHistory = connect(mapStateToProps, mapDispatchToProps)(History);
