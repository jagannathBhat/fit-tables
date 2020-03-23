import {
	TIME_TABLE,
	TIME_TABLE_ERROR,
	TIME_TABLE_LOADING
} from '../actions/types'

const initialState = {
	timetable: [],
	error: null,
	loading: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case TIME_TABLE:
			return {
				...action.payload,
				error: null,
				loading: false
			}
		case TIME_TABLE_ERROR:
			let msg = 'Failed to generate. Please try again.'
			if (action.payload.msg !== 'failed')
				msg = 'The maximum limits in ' + action.payload.batch + ' are too low.'
			return {
				timetable: [],
				error: msg,
				loading: false
			}
		case TIME_TABLE_LOADING:
			return {
				timetable: [],
				error: null,
				loading: true
			}
		default:
			return state
	}
}
