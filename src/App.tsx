import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openAddGoalDialogAction, openAddOperationDialogAction } from './store/actions/dialogs.actions';
import { Fab, Icon, Menu, MenuItem } from '@material-ui/core';
import { Goals } from './views/Goals/Goals';
import { History } from './views/History/History';
import { DialogsContainer } from './components/dialogs/DialogsContainer/DialogsContainer';

export const App: React.FC = () => {
	const [anchorEl, setAnchorEl] = useState<any>();
	const dispatch = useDispatch();

	const openMenu = (event: any) => setAnchorEl(event.currentTarget);

	const closeMenu = () => setAnchorEl(null);

	const openAddOperationDialog = () => {
		closeMenu();
		dispatch(openAddOperationDialogAction());
	}

	const openAddGoalDialog = () => {
		dispatch(openAddGoalDialogAction());
		closeMenu();
	};

	return (
		<Router>
			<>
				<header>
					<div className="wrapper">
						<div className="header-top">
							<span className="header-top-logo">Household finances</span>
						</div>
						<div className="header-links">
							<div className="header-links-date">
								2021
							</div>
							<nav>
								<ul>
									<li><NavLink className="link" activeClassName="active"
												 to="/history">History</NavLink></li>
									<li><NavLink className="link" activeClassName="active"
												 to="/goals">Goals</NavLink></li>
								</ul>
							</nav>
						</div>
					</div>
				</header>

				<Switch>
					<Route path="/history" component={History}/>
					<Route path="/goals" component={Goals}/>
					<Redirect from="/" to="/history"/>
				</Switch>

				<Fab color="primary" className="fab" onClick={openMenu}>
					<Icon>
						add_circle
					</Icon>
				</Fab>

				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={closeMenu}
				>
					<MenuItem onClick={openAddOperationDialog}>
						Add operation
					</MenuItem>
					<MenuItem onClick={openAddGoalDialog}>
						Add goal
					</MenuItem>
				</Menu>
				<DialogsContainer/>
			</>
		</Router>
	);
}
