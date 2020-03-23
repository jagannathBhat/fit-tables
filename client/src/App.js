import 'typeface-roboto'
import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { Provider } from 'react-redux'

import './App.css'
import Batches from './components/Batches'
import store from './store'
import TimeTable from './components/TimeTable'

const useStyles = makeStyles(theme => ({
	buttons: {
		margin: theme.spacing(3),
		marginLeft: '0px',
		textTransform: 'none'
	},
	buttonProgress: {
		color: green[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -24
	},
	inputSection: {
		margin: theme.spacing(6) + 'px 0px ' + theme.spacing(3) + 'px 0px'
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		margin: theme.spacing(6),
		paddingTop: theme.spacing(24)
	},
	table: {
		minWidth: 650
	},
	tableContainer: {
		margin: theme.spacing(6) + 'px 0px'
	},
	wrapper: {
		margin: theme.spacing(1),
		position: 'relative'
	}
}))

const App = () => {
	const classes = useStyles()

	return (
		<Provider store={store}>
			<div className={classes.root}>
				<Typography variant='h3' component='h1'>
					Timetable Generator
				</Typography>
				<Batches classes={classes} />
				<TimeTable classes={classes} />
			</div>
		</Provider>
	)
}

export default App
