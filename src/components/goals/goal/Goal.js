import React from 'react';
import './Goal.scss';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography/Typography';
import Divider from '@material-ui/core/Divider/Divider';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';
import CardActions from '@material-ui/core/CardActions/CardActions';
import Button from '@material-ui/core/Button/Button';

export class Goal extends React.Component {
	render() {
		return (
			<Card>
				<CardContent>
					<Typography variant="h4">
						iMac
					</Typography>
					<p>Lorem ipsum sadfasdfsafd</p>
					<Divider light/>
					<div className="numbers">
						<span>Cel 8000</span>
						<span>Do osiągnięcia pozostało 8000</span>
					</div>
					<LinearProgress variant="determinate" value={0}/>
				</CardContent>
				<CardActions>
					<Button disabled>Realizuj</Button>
					<Button>Edytuj</Button>
					<Button color="secondary">Usuń</Button>
				</CardActions>
			</Card>
		);
	}
}
