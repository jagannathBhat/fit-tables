import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Button, IconButton, TextField, Typography } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { connect } from 'react-redux'

import Subjects from './Subjects'
import {
	changeCurrentBatch,
	deleteCurrentBatch,
	loadData,
	newBatch,
	renameCurrentBatch,
	saveBatch,
} from '../actions/batchActions'

const Batches = ({
	batch: { batches, currentBatch },
	changeCurrentBatch,
	classes,
	deleteCurrentBatch,
	loadData,
	newBatch,
	renameCurrentBatch,
	saveBatch,
}) => {
	useEffect(() => {
		const func = async () => {
			await loadData()
			setLoading(false)
		}
		func()
		// eslint-disable-next-line
	}, [])

	const focusBatchForm = () => {
		if (document.getElementById('batchName'))
			document.getElementById('batchName').focus()
	}

	const [loading, setLoading] = useState(true)
	return (
		<>
			<div className={classes.inputSection}>
				<Typography variant='h4' component='h2'>
					Batches
				</Typography>
				<Button
					variant='contained'
					size='large'
					color='primary'
					className={classes.buttons}
					onClick={() => {
						saveBatch(batches)
					}}
				>
					Save
				</Button>
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
			{loading ? (
				<div
					style={{
						display: 'flex',
						position: 'fixed',
						height: '100%',
						width: '100%',
						alignContent: 'center',
						justifyContent: 'center',
						backgroundColor: 'white',
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						zIndex: 100,
						flexDirection: 'column',
						textAlign: 'center',
					}}
				>
					<Typography component='p' variant='h4'>
						Loading
					</Typography>
				</div>
			) : (
				<></>
			)}
		</>
	)
}

Batches.propTypes = {
	batch: PropTypes.object.isRequired,
	changeCurrentBatch: PropTypes.func.isRequired,
	deleteCurrentBatch: PropTypes.func.isRequired,
	loadData: PropTypes.func.isRequired,
	newBatch: PropTypes.func.isRequired,
	renameCurrentBatch: PropTypes.func.isRequired,
	saveBatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
	batch: state.batch,
})

export default connect(mapStateToProps, {
	changeCurrentBatch,
	deleteCurrentBatch,
	loadData,
	newBatch,
	renameCurrentBatch,
	saveBatch,
})(Batches)
