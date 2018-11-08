import React from 'react';
import PropTypes from 'prop-types';
import Operation from '../../components/history/operation/Operation';
import { removeOperationAction } from '../../store/actions/budget.actions';
import { connect } from 'react-redux';
import { openEditOperationDialogAction } from '../../store/actions/dialogs.actions';

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
		onOperationRemove: operation => dispatch(removeOperationAction(operation)),
		onOperationEdit: operation => dispatch(openEditOperationDialogAction(operation))
	}
};

export const VisibleHistory = connect(mapStateToProps, mapDispatchToProps)(History);
