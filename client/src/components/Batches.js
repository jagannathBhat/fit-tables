import PropTypes from 'prop-types'
import React from 'react'
import { Button, IconButton, TextField, Typography } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { connect } from 'react-redux'

import Subjects from './Subjects'
import {
	changeCurrentBatch,
	deleteCurrentBatch,
	newBatch,
	renameCurrentBatch
} from '../actions/batchActions'

const Batches = ({
	batch: { batches, currentBatch },
	changeCurrentBatch,
	classes,
	deleteCurrentBatch,
	newBatch,
	renameCurrentBatch
}) => {
	const focusBatchForm = () => {
		if (document.getElementById('batchName'))
			document.getElementById('batchName').focus()
	}

	return (
		<>
			<div className={classes.inputSection}>
				<Typography variant='h4' component='h2'>
					Batches
				</Typography>
				<div>
					{batches.map((batch, key) => (
						<Button
							variant={key === currentBatch ? 'contained' : 'outlined'}
							size='large'
							color='primary'
							className={classes.buttons}
							onClick={() => {
								changeCurrentBatch(key)
								focusBatchForm()
							}}
							key={key}
						>
							{batch.name}
						</Button>
					))}
					<Button
						variant='outlined'
						size='large'
						color='primary'
						className={classes.buttons}
						onClick={() => {
							newBatch()
							focusBatchForm()
						}}
					>
						Add Batch
					</Button>
				</div>
				<div>
					{currentBatch !== -1 ? (
						<>
							<TextField
								autoFocus
								label='Batch Name'
								variant='outlined'
								id='batchName'
								value={batches[currentBatch].name}
								onChange={({ target: { value } }) => renameCurrentBatch(value)}
							/>
							<IconButton aria-label='delete' onClick={deleteCurrentBatch}>
								<Delete />
							</IconButton>
							<Subjects classes={classes} />
						</>
					) : (
						<></>
					)}
				</div>
			</div>
		</>
	)
}

Batches.propTypes = {
	batch: PropTypes.object.isRequired,
	changeCurrentBatch: PropTypes.func.isRequired,
	deleteCurrentBatch: PropTypes.func.isRequired,
	newBatch: PropTypes.func.isRequired,
	renameCurrentBatch: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	batch: state.batch
})

export default connect(mapStateToProps, {
	changeCurrentBatch,
	deleteCurrentBatch,
	newBatch,
	renameCurrentBatch
})(Batches)
