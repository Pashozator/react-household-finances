import React from 'react';
import PropTypes from 'prop-types';
import { AddOperationDialog } from '../AddOperationDialog/AddOperationDialog';
import { AddGoalDialog } from '../AddGoalDialog/AddGoalDialog';
import { connect } from 'react-redux';
import {
	closeAddGoalDialogAction,
	closeAddOperationDialogAction,
	closeAuthorDialogAction,
	closeEditGoalDialogAction,
	closeEditOperationDialogAction, closeErrorDialogAction
} from '../../../store/actions/dialogs.actions';
import { addOperationAction, editOperationAction } from '../../../store/actions/budget.actions';
import { addGoalAction, editGoalAction } from '../../../store/actions/goals.actions';
import { EditOperationDialog } from '../EditOperationDialog/EditOperationDialog';
import { EditGoalDialog } from '../EditGoalDialog/EditGoalDialog';
import { AuthorDialog } from '../AuthorDialog/AuthorDialog';
import {
	selectAddGoalDialogOpened,
	selectAddOperationDialogOpened,
	selectAuthorDialogOpened,
	selectEditGoalDialogOpened,
	selectEditGoalDialogPayload,
	selectEditOperationDialogOpened,
	selectEditOperationDialogPayload, selectErrorDialogOpened
} from '../../../store/selectors/dialogs.selectors';
import { ErrorDialog } from '../ErrorDialog/ErrorDialog';

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
				<ErrorDialog
					open={this.props.errorDialogOpened}
					onClose={this.props.closeErrorDialog}
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
	editGoalDialogPayload: PropTypes.object.isRequired,
	errorDialogOpened: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
	addOperationDialogOpened: selectAddOperationDialogOpened(state),
	editOperationDialogOpened: selectEditOperationDialogOpened(state),
	editOperationDialogPayload: selectEditOperationDialogPayload(state),
	addGoalDialogOpened: selectAddGoalDialogOpened(state),
	editGoalDialogOpened: selectEditGoalDialogOpened(state),
	editGoalDialogPayload: selectEditGoalDialogPayload(state),
	authorDialogOpened: selectAuthorDialogOpened(state),
	errorDialogOpened: selectErrorDialogOpened(state)
});

const mapDispatchToProps = dispatch => ({
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
	closeAuthorDialog: () => dispatch(closeAuthorDialogAction()),
	closeErrorDialog: () => dispatch(closeErrorDialogAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);
