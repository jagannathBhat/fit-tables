import {
	CHANGE_CURRENT_BATCH,
	CHANGE_CURRENT_SUBJECT,
	CHANGE_CURRENT_SUBJECT_MAX,
	CHANGE_CURRENT_SUBJECT_MIN,
	CHANGE_CURRENT_SUBJECT_STEP,
	CHANGE_CURRENT_TEACHER,
	DELETE_CURRENT_BATCH,
	DELETE_CURRENT_SUBJECT,
	DELETE_CURRENT_TEACHER,
	LOAD_BATCH,
	NEW_BATCH,
	NEW_SUBJECT,
	NEW_TEACHER,
	RENAME_CURRENT_BATCH,
	RENAME_CURRENT_SUBJECT,
	RENAME_CURRENT_TEACHER,
	SET_DEFAULT_SUBJECT_MAX,
	SET_DEFAULT_SUBJECT_MIN,
	SET_DEFAULT_SUBJECT_STEP,
} from '../actions/types'

const initialState = {
	batches: [],
	currentBatch: -1,
	currentSubject: -1,
	currentTeacher: -1,
	defaultMax: 0,
	defaultMin: 0,
	defaultStep: 0,
}

export default (state = initialState, action) => {
	const {
		batches,
		currentBatch,
		currentSubject,
		currentTeacher,
		defaultMax,
		defaultMin,
		defaultStep,
	} = state
	let copyBatches = batches
	let copySubjects = currentBatch === -1 ? null : batches[currentBatch].subjects
	let copyTeachers =
		currentBatch === -1 || currentSubject === -1
			? null
			: batches[currentBatch].subjects[currentSubject].teachers
	let lastIndex = 0
	switch (action.type) {
		case CHANGE_CURRENT_BATCH:
			if (batches[batches.length - 1].name === '') {
				copyBatches.pop()
			}
			return {
				...state,
				batches: copyBatches,
				currentBatch: action.payload,
				currentSubject: -1,
				currentTeacher: -1,
			}
		case CHANGE_CURRENT_SUBJECT:
			if (copySubjects[copySubjects.length - 1].name === '') {
				copyBatches[currentBatch].subjects.pop()
			}
			return {
				...state,
				batches: copyBatches,
				currentSubject: action.payload,
				currentTeacher: -1,
			}
		case CHANGE_CURRENT_TEACHER:
			if (copyTeachers[copyTeachers.length - 1] === '') {
				copyBatches[currentBatch].subjects[currentSubject].teachers.pop()
			}
			return {
				...state,
				batches: copyBatches,
				currentTeacher: action.payload,
			}
		case CHANGE_CURRENT_SUBJECT_MAX:
			copyBatches[currentBatch].subjects[currentSubject].max = action.payload
			return {
				...state,
				batches: copyBatches,
			}
		case CHANGE_CURRENT_SUBJECT_MIN:
			copyBatches[currentBatch].subjects[currentSubject].min = action.payload
			return {
				...state,
				batches: copyBatches,
			}
		case CHANGE_CURRENT_SUBJECT_STEP:
			copyBatches[currentBatch].subjects[currentSubject].step = action.payload
			return {
				...state,
				batches: copyBatches,
			}
		case DELETE_CURRENT_BATCH:
			return {
				...state,
				batches: batches.filter((batch, index) => index !== currentBatch),
				currentBatch: -1,
				currentSubject: -1,
				currentTeacher: -1,
			}
		case DELETE_CURRENT_SUBJECT:
			copyBatches[currentBatch].subjects = copySubjects.filter(
				(subject, index) => index !== currentSubject
			)
			return {
				...state,
				batches: copyBatches,
				currentSubject: -1,
				currentTeacher: -1,
			}
		case DELETE_CURRENT_TEACHER:
			copyBatches[currentBatch].subjects[
				currentSubject
			].teachers = copyTeachers.filter(
				(teacher, index) => index !== currentTeacher
			)
			return {
				...state,
				batches: copyBatches,
				currentTeacher: -1,
			}
		case LOAD_BATCH:
			return {
				...initialState,
				...action.payload,
			}
		case NEW_BATCH:
			lastIndex = batches.length - 1
			if (lastIndex < 0 || batches[lastIndex].name !== '')
				return {
					...state,
					batches: [...batches, { name: '', subjects: [] }],
					currentBatch: lastIndex + 1,
					currentSubject: -1,
					currentTeacher: -1,
				}
			return state
		case NEW_SUBJECT:
			lastIndex = copySubjects.length - 1
			if (lastIndex < 0 || copySubjects[lastIndex].name !== '') {
				copyBatches[currentBatch].subjects.push({
					name: '',
					teachers: [],
					max: defaultMax,
					min: defaultMin,
					step: defaultStep,
				})
				return {
					...state,
					batches: copyBatches,
					currentSubject: lastIndex + 1,
					currentTeacher: -1,
				}
			}
			return state
		case NEW_TEACHER:
			lastIndex = copyTeachers.length - 1
			if (lastIndex < 0 || copyTeachers[lastIndex].name !== '') {
				copyBatches[currentBatch].subjects[currentSubject].teachers.push('')
				return {
					...state,
					batches: copyBatches,
					currentTeacher: lastIndex + 1,
				}
			}
			return state
		case RENAME_CURRENT_BATCH:
			copyBatches[currentBatch].name = action.payload
			return {
				...state,
				batches: copyBatches,
			}
		case RENAME_CURRENT_SUBJECT:
			copyBatches[currentBatch].subjects[currentSubject].name = action.payload
			return {
				...state,
				batches: copyBatches,
			}
		case RENAME_CURRENT_TEACHER:
			copyBatches[currentBatch].subjects[currentSubject].teachers[
				currentTeacher
			] = action.payload
			return {
				...state,
				batches: copyBatches,
			}
		case SET_DEFAULT_SUBJECT_MAX:
			return {
				...state,
				defaultMax: batches[currentBatch].subjects[currentSubject].max,
			}
		case SET_DEFAULT_SUBJECT_MIN:
			return {
				...state,
				defaultMin: batches[currentBatch].subjects[currentSubject].min,
			}
		case SET_DEFAULT_SUBJECT_STEP:
			return {
				...state,
				defaultStep: batches[currentBatch].subjects[currentSubject].step,
			}
		default:
			return state
	}
}
