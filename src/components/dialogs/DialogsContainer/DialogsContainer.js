import React from 'react';
import PropTypes from 'prop-types';
import { AddOperationDialog } from '../AddOperationDialog/AddOperationDialog';
import { AddGoalDialog } from '../AddGoalDialog/AddGoalDialog';
import { connect } from 'react-redux';
import { CLOSE_ADD_GOAL_DIALOG, CLOSE_ADD_OPERATION_DIALOG } from '../../../store/actions/dialogs.actions';
import { ADD_OPERATION } from '../../../store/actions/budget.actions';

class DialogsContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<AddOperationDialog
					open={this.props.addOperationDialogOpened}
					onClose={this.props.closeAddOperationDialog}
				/>
				<AddGoalDialog
					open={this.props.addGoalDialogOpened}
					onClose={this.props.closeAddGoalDialog}
				/>
			</>
		);
	}
}

DialogsContainer.propTypes = {
	addOperationDialogOpened: PropTypes.bool.isRequired,
	addGoalDialogOpened: PropTypes.bool.isRequired,
	closeAddOperationDialog: PropTypes.func.isRequired,
	closeAddGoalDialog: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		addOperationDialogOpened: state.dialogs.addOperationDialogOpened,
		addGoalDialogOpened: state.dialogs.addGoalDialogOpened
	}
};

const mapDispatchToProps = dispatch => {
	return {
		closeAddOperationDialog: result => {
			if (result !== undefined) {
				dispatch({ type: ADD_OPERATION, payload: result })
			}

			dispatch({ type: CLOSE_ADD_OPERATION_DIALOG })
		},
		closeAddGoalDialog: () => dispatch({ type: CLOSE_ADD_GOAL_DIALOG })
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);
