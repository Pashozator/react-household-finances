import React from 'react';
import PropTypes from 'prop-types';
import Operation from '../../components/history/operation/Operation';
import { getBudgetAction, removeOperationAction } from '../../store/actions/budget.actions';
import { connect } from 'react-redux';
import { openEditOperationDialogAction } from '../../store/actions/dialogs.actions';
import { selectDebit, selectOperations } from '../../store/selectors/budget.selectors';

class History extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.onGetBudget();
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
		debit: selectDebit(state),
		operations: selectOperations(state)
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onOperationRemove: operation => dispatch(removeOperationAction(operation)),
		onOperationEdit: operation => dispatch(openEditOperationDialogAction(operation)),
		onGetBudget: () => dispatch(getBudgetAction())
	}
};

export const VisibleHistory = connect(mapStateToProps, mapDispatchToProps)(History);
