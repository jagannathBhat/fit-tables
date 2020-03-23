import PropTypes from 'prop-types'
import React from 'react'
import { Button, TextField, IconButton, Typography } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { connect } from 'react-redux'

import {
	changeCurrentTeacher,
	deleteCurrentTeacher,
	newTeacher,
	renameCurrentTeacher
} from '../actions/teacherActions'

const Teachers = ({
	batch: { batches, currentBatch, currentSubject, currentTeacher },
	classes,
	changeCurrentTeacher,
	deleteCurrentTeacher,
	newTeacher,
	renameCurrentTeacher
}) => {
	const focusTeacherForm = () => {
		if (document.getElementById('teacherName'))
			document.getElementById('teacherName').focus()
	}

	const { teachers } = batches[currentBatch].subjects[currentSubject]

	return (
		<div className={classes.inputSection}>
			<Typography variant='h4' component='h2'>
				Teachers
			</Typography>
			<div>
				{teachers.map((teacher, key) => (
					<Button
						variant={key === currentTeacher ? 'contained' : 'outlined'}
						size='large'
						color='primary'
						className={classes.buttons}
						onClick={() => {
							changeCurrentTeacher(key)
							focusTeacherForm()
						}}
						key={key}
					>
						{teacher}
					</Button>
				))}
				<Button
					variant='outlined'
					size='large'
					color='primary'
					className={classes.buttons}
					onClick={() => {
						newTeacher()
						focusTeacherForm()
					}}
				>
					Add Teacher
				</Button>
			</div>
			<div>
				{currentTeacher !== -1 ? (
					<>
						<TextField
							autoFocus
							label='Teacher Name'
							variant='outlined'
							id='teacherName'
							value={teachers[currentTeacher]}
							onChange={({ target: { value } }) => renameCurrentTeacher(value)}
						/>
						<IconButton aria-label='delete' onClick={deleteCurrentTeacher}>
							<Delete />
						</IconButton>
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	)
}

Teachers.propTypes = {
	batch: PropTypes.object.isRequired,
	changeCurrentTeacher: PropTypes.func.isRequired,
	deleteCurrentTeacher: PropTypes.func.isRequired,
	newTeacher: PropTypes.func.isRequired,
	renameCurrentTeacher: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	batch: state.batch
})

export default connect(mapStateToProps, {
	changeCurrentTeacher,
	deleteCurrentTeacher,
	newTeacher,
	renameCurrentTeacher
})(Teachers)
