import React from 'react';
import PropTypes from 'prop-types';
import { AddOperationDialog } from '../AddOperationDialog/AddOperationDialog';
import { AddGoalDialog } from '../AddGoalDialog/AddGoalDialog';
import { connect } from 'react-redux';
import {
	closeAddGoalDialogAction,
	closeAddOperationDialogAction, closeAuthorDialogAction,
	closeEditGoalDialogAction,
	closeEditOperationDialogAction
} from '../../../store/actions/dialogs.actions';
import { addOperationAction, editOperationAction } from '../../../store/actions/budget.actions';
import { addGoalAction, editGoalAction } from '../../../store/actions/goals.actions';
import { EditOperationDialog } from '../EditOperationDialog/EditOperationDialog';
import { EditGoalDialog } from '../EditGoalDialog/EditGoalDialog';
import { AuthorDialog } from '../AuthorDialog/AuthorDialog';

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
				<EditOperationDialog
					open={this.props.editOperationDialogOpened}
					operation={this.props.editOperationDialogPayload}
					onClose={this.props.closeEditOperationDialog}
				/>
				<AddGoalDialog
					open={this.props.addGoalDialogOpened}
					onClose={this.props.closeAddGoalDialog}
				/>
				<EditGoalDialog
					open={this.props.editGoalDialogOpened}
					goal={this.props.editGoalDialogPayload}
					onClose={this.props.closeEditGoalDialog}
				/>
				<AuthorDialog
					open={this.props.authorDialogOpened}
					onClose={this.props.closeAuthorDialog}
				/>
			</>
		);
	}
}

DialogsContainer.propTypes = {
	addOperationDialogOpened: PropTypes.bool.isRequired,
	addGoalDialogOpened: PropTypes.bool.isRequired,
	editOperationDialogOpened: PropTypes.bool.isRequired,
	editGoalDialogOpened: PropTypes.bool.isRequired,
	authorDialogOpened: PropTypes.bool.isRequired,
	closeAddOperationDialog: PropTypes.func.isRequired,
	closeAddGoalDialog: PropTypes.func.isRequired,
	closeEditOperationDialog: PropTypes.func.isRequired,
	closeEditGoalDialog: PropTypes.func.isRequired,
	editOperationDialogPayload: PropTypes.object.isRequired,
	editGoalDialogPayload: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		addOperationDialogOpened: state.dialogs.addOperationDialogOpened,
		editOperationDialogOpened: state.dialogs.editOperationDialogOpened,
		editOperationDialogPayload: state.dialogs.editOperationDialogPayload,
		addGoalDialogOpened: state.dialogs.addGoalDialogOpened,
		editGoalDialogOpened: state.dialogs.editGoalDialogOpened,
		editGoalDialogPayload: state.dialogs.editGoalDialogPayload,
		authorDialogOpened: state.dialogs.authorDialogOpened
	}
};

const mapDispatchToProps = dispatch => {
	return {
		closeAddOperationDialog: result => {
			if (result !== undefined) {
				dispatch(addOperationAction(result));
			}

			dispatch(closeAddOperationDialogAction());
		},
		closeEditOperationDialog: result => {
			if (result !== undefined) {
				dispatch(editOperationAction(result));
			}

			dispatch(closeEditOperationDialogAction());
		},
		closeAddGoalDialog: result => {
			if (result !== undefined) {
				dispatch(addGoalAction(result));
			}

			dispatch(closeAddGoalDialogAction());
		},
		closeEditGoalDialog: result => {
			if (result !== undefined) {
				dispatch(editGoalAction(result));
			}

			dispatch(closeEditGoalDialogAction());
		},
		closeAuthorDialog: () => dispatch(closeAuthorDialogAction())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);
