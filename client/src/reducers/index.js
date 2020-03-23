import { combineReducers } from 'redux'

import batchReducer from './batchReducer'
import timetableReducer from './timetableReducer'

export default combineReducers({
	batch: batchReducer,
	timetable: timetableReducer
})
