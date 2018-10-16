import React from 'react';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardActions from '@material-ui/core/CardActions/CardActions';
import Button from '@material-ui/core/Button/Button';
import './Operation.scss';

export class Operation extends React.Component {
	render() {
		return (
			<Card>
				<CardContent>
					<div className="content">
						<div className="label-date">
							<span className="date">2018-14-13</span>
							<span className="label">Wypłata</span>
						</div>
						<span className="value">3000</span>
					</div>
					<div className="description">
						<p>Proin iaculis augue in elit sagittis varius. Nam ut metus vitae turpis pretium hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum laoreet enim vel felis facilisis tincidunt. Nam massa purus, rutrum aliquam ex nec, facilisis consectetur lectus.</p>
					</div>
				</CardContent>
				<CardActions>
					<Button color="secondary">Usuń</Button>
					<Button>Edytuj</Button>
				</CardActions>
			</Card>
		);
	}
}
