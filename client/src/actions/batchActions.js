import {
	CHANGE_CURRENT_BATCH,
	DELETE_CURRENT_BATCH,
	NEW_BATCH,
	RENAME_CURRENT_BATCH
} from './types'

export const changeCurrentBatch = key => async dispatch =>
	dispatch({
		type: CHANGE_CURRENT_BATCH,
		payload: key
	})

export const deleteCurrentBatch = () => async dispatch =>
	dispatch({ type: DELETE_CURRENT_BATCH })

export const newBatch = () => async dispatch => dispatch({ type: NEW_BATCH })

export const renameCurrentBatch = name => async dispatch =>
	dispatch({
		type: RENAME_CURRENT_BATCH,
		payload: name
	})
