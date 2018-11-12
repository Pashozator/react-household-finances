import React from 'react';
import { getGoalsAction, realizeGoalAction, removeGoalAction } from '../../store/actions/goals.actions';
import Goal from '../../components/goals/Goal/Goal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openEditGoalDialogAction } from '../../store/actions/dialogs.actions';
import { selectGoals } from '../../store/selectors/goals.selectors';
import { selectDebit } from '../../store/selectors/budget.selectors';

class Goals extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.props.onGetGoals();
	}

	render() {
		return (
			<div className="wrapper padding-top-25">
				{this.props.goals.map((goal, index) => (
					<Goal goal={goal} debit={this.props.debit} key={index} onRemove={this.props.onGoalRemove}
						  onEdit={this.props.onGoalEdit} onRealize={this.props.onGoalRealize}/>
				))}
			</div>
		);
	}
}

Goals.propTypes = {
	goals: PropTypes.array.isRequired,
	debit: PropTypes.number.isRequired,
	onGoalRemove: PropTypes.func.isRequired,
	onGoalEdit: PropTypes.func.isRequired,
	onGoalRealize: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	goals: selectGoals(state),
	debit: selectDebit(state)
});

const mapDispatchToProps = dispatch => ({
	onGoalRemove: goal => dispatch(removeGoalAction(goal)),
	onGoalEdit: goal => dispatch(openEditGoalDialogAction(goal)),
	onGoalRealize: goal => dispatch(realizeGoalAction(goal)),
	onGetGoals: () => dispatch(getGoalsAction())
});

export const VisibleGoals = connect(mapStateToProps, mapDispatchToProps)(Goals);
