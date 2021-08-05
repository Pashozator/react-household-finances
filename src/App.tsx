import React from 'react';
import { BrowserRouter as Router, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { GoalsView } from './views/GoalsView/GoalsView';
import { BudgetView } from './views/BudgetView/BudgetView';
import { DialogsContainer } from './components/dialogs/DialogsContainer/DialogsContainer';
import moment from 'moment';

export const App: React.FC = () => {
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
								{moment().format('YYYY')}
							</div>
							<nav>
								<ul>
									<li><NavLink className="link" activeClassName="active"
												 to="/budget">Budget</NavLink></li>
									<li><NavLink className="link" activeClassName="active"
												 to="/goals">Goals</NavLink></li>
								</ul>
							</nav>
						</div>
					</div>
				</header>

				<Switch>
					<Route path="/budget" component={BudgetView}/>
					<Route path="/goals" component={GoalsView}/>
					<Redirect from="/" to="/budget"/>
				</Switch>
				<DialogsContainer/>
			</>
		</Router>
	);
}
