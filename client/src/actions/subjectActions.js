import {
	CHANGE_CURRENT_SUBJECT,
	CHANGE_CURRENT_SUBJECT_MAX,
	CHANGE_CURRENT_SUBJECT_MIN,
	CHANGE_CURRENT_SUBJECT_STEP,
	DELETE_CURRENT_SUBJECT,
	NEW_SUBJECT,
	RENAME_CURRENT_SUBJECT,
	SET_DEFAULT_SUBJECT_MAX,
	SET_DEFAULT_SUBJECT_MIN,
	SET_DEFAULT_SUBJECT_STEP
} from './types'

export const changeCurrentSubject = key => async dispatch =>
	dispatch({
		type: CHANGE_CURRENT_SUBJECT,
		payload: key
	})

export const changeCurrentSubjectMax = max => async dispatch => {
	dispatch({
		type: CHANGE_CURRENT_SUBJECT_MAX,
		payload: parseInt(max)
	})
}

export const changeCurrentSubjectMin = min => async dispatch =>
	dispatch({
		type: CHANGE_CURRENT_SUBJECT_MIN,
		payload: parseInt(min)
	})

export const changeCurrentSubjectStep = step => async dispatch =>
	dispatch({
		type: CHANGE_CURRENT_SUBJECT_STEP,
		payload: parseInt(step)
	})

export const deleteCurrentSubject = () => async dispatch =>
	dispatch({ type: DELETE_CURRENT_SUBJECT })

export const newSubject = () => async dispatch =>
	dispatch({ type: NEW_SUBJECT })

export const renameCurrentSubject = name => async dispatch =>
	dispatch({
		type: RENAME_CURRENT_SUBJECT,
		payload: name
	})

export const setDefaultSubjectMax = () => async dispatch => {
	dispatch({
		type: SET_DEFAULT_SUBJECT_MAX
	})
}

export const setDefaultSubjectMin = () => async dispatch =>
	dispatch({
		type: SET_DEFAULT_SUBJECT_MIN
	})

export const setDefaultSubjectStep = () => async dispatch =>
	dispatch({
		type: SET_DEFAULT_SUBJECT_STEP
	})
