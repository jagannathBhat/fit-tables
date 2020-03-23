import PropTypes from 'prop-types'
import React from 'react'
import { Button, TextField, IconButton, Typography } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { connect } from 'react-redux'

import Teachers from './Teachers'
import {
	changeCurrentSubject,
	changeCurrentSubjectMax,
	changeCurrentSubjectMin,
	changeCurrentSubjectStep,
	deleteCurrentSubject,
	newSubject,
	renameCurrentSubject,
	setDefaultSubjectMax,
	setDefaultSubjectMin,
	setDefaultSubjectStep
} from '../actions/subjectActions'

const Subjects = ({
	batch: { batches, currentBatch, currentSubject },
	changeCurrentSubject,
	changeCurrentSubjectMax,
	changeCurrentSubjectMin,
	changeCurrentSubjectStep,
	classes,
	deleteCurrentSubject,
	newSubject,
	renameCurrentSubject,
	setDefaultSubjectMax,
	setDefaultSubjectMin,
	setDefaultSubjectStep
}) => {
	const focusSubjectForm = () => {
		if (document.getElementById('subjectName'))
			document.getElementById('subjectName').focus()
	}

	const { subjects } = batches[currentBatch]

	return (
		<div className={classes.inputSection}>
			<Typography variant='h4' component='h2'>
				Subjects
			</Typography>
			<div>
				{subjects.map((subject, key) => (
					<Button
						variant={key === currentSubject ? 'contained' : 'outlined'}
						size='large'
						color='primary'
						className={classes.buttons}
						onClick={() => {
							changeCurrentSubject(key)
							focusSubjectForm()
						}}
						key={key}
					>
						{subject.name}
					</Button>
				))}
				<Button
					variant='outlined'
					size='large'
					color='primary'
					className={classes.buttons}
					onClick={() => {
						newSubject()
						focusSubjectForm()
					}}
				>
					Add Subject
				</Button>
			</div>
			<div>
				{currentSubject !== -1 ? (
					<>
						<TextField
							autoFocus
							label='Subject Name'
							variant='outlined'
							id='subjectName'
							value={subjects[currentSubject].name}
							onChange={({ target: { value } }) => renameCurrentSubject(value)}
						/>
						<IconButton aria-label='delete' onClick={deleteCurrentSubject}>
							<Delete />
						</IconButton>
						<br />
						<br />
						<TextField
							label='Minimum Limit'
							variant='outlined'
							type='number'
							value={subjects[currentSubject].min}
							onChange={({ target: { value } }) =>
								changeCurrentSubjectMin(value)
							}
						/>
						<Button color='primary' size='large' onClick={setDefaultSubjectMin}>
							Set as default
						</Button>
						<br />
						<br />
						<TextField
							label='Maximum Limit'
							variant='outlined'
							type='number'
							value={subjects[currentSubject].max}
							onChange={({ target: { value } }) =>
								changeCurrentSubjectMax(value)
							}
						/>
						<Button color='primary' size='large' onClick={setDefaultSubjectMax}>
							Set as default
						</Button>
						<br />
						<br />
						<TextField
							label='Step'
							variant='outlined'
							type='number'
							value={subjects[currentSubject].step}
							onChange={({ target: { value } }) =>
								changeCurrentSubjectStep(value)
							}
						/>
						<Button
							color='primary'
							size='large'
							onClick={setDefaultSubjectStep}
						>
							Set as default
						</Button>
						<Teachers classes={classes} />
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	)
}

Subjects.propTypes = {
	batch: PropTypes.object.isRequired,
	changeCurrentSubject: PropTypes.func.isRequired,
	changeCurrentSubjectMax: PropTypes.func.isRequired,
	changeCurrentSubjectMin: PropTypes.func.isRequired,
	changeCurrentSubjectStep: PropTypes.func.isRequired,
	deleteCurrentSubject: PropTypes.func.isRequired,
	newSubject: PropTypes.func.isRequired,
	renameCurrentSubject: PropTypes.func.isRequired,
	setDefaultSubjectMax: PropTypes.func.isRequired,
	setDefaultSubjectMin: PropTypes.func.isRequired,
	setDefaultSubjectStep: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	batch: state.batch
})

export default connect(mapStateToProps, {
	changeCurrentSubject,
	changeCurrentSubjectMax,
	changeCurrentSubjectMin,
	changeCurrentSubjectStep,
	deleteCurrentSubject,
	newSubject,
	renameCurrentSubject,
	setDefaultSubjectMax,
	setDefaultSubjectMin,
	setDefaultSubjectStep
})(Subjects)
