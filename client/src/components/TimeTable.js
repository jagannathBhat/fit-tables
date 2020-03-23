import PropTypes from 'prop-types'
import React from 'react'
import {
	Button,
	CircularProgress,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	Paper
} from '@material-ui/core'
import { connect } from 'react-redux'

import { generateTimetable } from '../actions/timetableActions'

const TimeTable = ({
	batch: { batches },
	classes,
	timetable: { timetable, error, loading },
	generateTimetable
}) => {
	return (
		<div style={{ textAlign: 'center' }}>
			<div className={classes.wrapper}>
				<Button
					variant='contained'
					color='secondary'
					size='large'
					className={classes.buttons}
					disabled={loading}
					onClick={() => generateTimetable(batches)}
				>
					Generate Timetable
				</Button>
				{loading && (
					<CircularProgress size={24} className={classes.buttonProgress} />
				)}
			</div>
			{error !== null ? (
				<Typography variant='body1' component='p'>
					{error}
				</Typography>
			) : (
				<>
					{timetable.map((batch, key) => (
						<TableContainer
							component={Paper}
							className={classes.tableContainer}
							key={key}
						>
							<Table className={classes.table}>
								<TableHead>
									<TableRow>
										<TableCell>{batch.name}</TableCell>
										<TableCell align='center'>Hour 1</TableCell>
										<TableCell align='center'>Hour 2</TableCell>
										<TableCell align='center'>Hour 3</TableCell>
										<TableCell align='center'>Hour 4</TableCell>
										<TableCell align='center'>Hour 5</TableCell>
										<TableCell align='center'>Hour 6</TableCell>
										<TableCell align='center'>Hour 7</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{batch.classes.map((day, key1) => (
										<TableRow key={key1}>
											<TableCell component='th' scope='row'>
												Day {key1 + 1}
											</TableCell>
											{day.map((hour, key2) => (
												<TableCell align='center' key={key2}>
													{hour[0]}
													<br />
													{hour[1]}
												</TableCell>
											))}
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					))}
				</>
			)}
		</div>
	)
}

TimeTable.propTypes = {
	batch: PropTypes.object.isRequired,
	generateTimetable: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	batch: state.batch,
	timetable: state.timetable
})

export default connect(mapStateToProps, {
	generateTimetable
})(TimeTable)
