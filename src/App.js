import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch, Redirect } from 'react-router-dom';
import { History } from './views/history/History';
import './App.scss';
import { Goals } from './views/goals/Goals';

class App extends Component {
	render() {
		return (
			<Router>
				<main>
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
						<Route path="/history" component={History}/>
						<Route path="/goals" component={Goals}/>
						<Redirect from="/" to="/history"/>
					</Switch>
				</main>
			</Router>
		);
	}
}

export default App;
