import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import { Goals } from './views/goals/Goals';
import Button from '@material-ui/core/Button/Button';
import Icon from '@material-ui/core/Icon/Icon';
import Menu from '@material-ui/core/Menu/Menu';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import { VisibleHistory } from './views/history/History';
import DialogsContainer from './components/dialogs/DialogsContainer/DialogsContainer';
import { OPEN_ADD_GOAL_DIALOG, OPEN_ADD_OPERATION_DIALOG } from './store/actions/dialogs.actions';
import { connect } from 'react-redux';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			anchorEl: null
		}
	}

	openMenu = event => this.setState({ anchorEl: event.currentTarget });

	closeMenu = () => this.setState({ anchorEl: null });

	openAddOperationDialog = () => {
		this.props.openAddOperationDialog();
		this.closeMenu();
	};

	openAddGoalDialog = () => {
		this.props.openAddGoalDialog();
		this.closeMenu();
	};

	render() {
		return (
			<Router>
				<>
					<header>
						<div className="wrapper">
							<div className="header-top">
								<span className="header-top-logo">Domowe finanse</span>
								<a className="header-top-author">Autor</a>
							</div>
							<div className="header-links">
								<div className="header-links-date">
									2018
								</div>
								<nav>
									<ul>
										<li><NavLink className="link" activeClassName="active"
													 to="/history">Historia</NavLink></li>
										<li><NavLink className="link" activeClassName="active"
													 to="/goals">Cele</NavLink></li>
									</ul>
								</nav>
							</div>
						</div>
					</header>

					<Switch>
						<Route path="/history" component={VisibleHistory}/>
						<Route path="/goals" component={Goals}/>
						<Redirect from="/" to="/history"/>
					</Switch>

					<Button variant="fab" color="primary" className="fab" onClick={this.openMenu}>
						<Icon>
							add_circle
						</Icon>
					</Button>

					<Menu
						id="simple-menu"
						anchorEl={this.state.anchorEl}
						open={Boolean(this.state.anchorEl)}
						onClose={this.closeMenu}
					>
						<MenuItem onClick={this.openAddOperationDialog}>
							Dodaj operację
						</MenuItem>
						<MenuItem onClick={this.openAddGoalDialog}>
							Dodaj cel
						</MenuItem>
					</Menu>
					<DialogsContainer/>
				</>
			</Router>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		openAddOperationDialog: () => dispatch({ type: OPEN_ADD_OPERATION_DIALOG }),
		openAddGoalDialog: () => dispatch({ type: OPEN_ADD_GOAL_DIALOG })
	}
};

export default connect(null, mapDispatchToProps)(App);
