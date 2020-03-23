import {
	CHANGE_CURRENT_TEACHER,
	DELETE_CURRENT_TEACHER,
	RENAME_CURRENT_TEACHER,
	NEW_TEACHER
} from './types'

export const changeCurrentTeacher = key => async dispatch =>
	dispatch({
		type: CHANGE_CURRENT_TEACHER,
		payload: key
	})

export const deleteCurrentTeacher = () => async dispatch =>
	dispatch({ type: DELETE_CURRENT_TEACHER })

export const newTeacher = () => async dispatch =>
	dispatch({ type: NEW_TEACHER })

export const renameCurrentTeacher = name => async dispatch =>
	dispatch({
		type: RENAME_CURRENT_TEACHER,
		payload: name
	})
