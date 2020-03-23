import axios from 'axios'

import { TIME_TABLE, TIME_TABLE_ERROR, TIME_TABLE_LOADING } from './types'

export const generateTimetable = data => async dispatch => {
	dispatch({
		type: TIME_TABLE_LOADING
	})
	try {
		const config = { headers: { 'Content-Type': 'application/json' } }
		const res = await axios.post('/generate', { batches: data }, config)
		if (res.data.msg) dispatch({ type: TIME_TABLE_ERROR, payload: res.data })
		else
			dispatch({
				type: TIME_TABLE,
				payload: res.data
			})
	} catch (err) {
		console.error(err)
	}
}
