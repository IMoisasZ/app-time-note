function validationNote (codeReasonId, note){
	const {date, code_reason_id, description_reason_id, di_id, os_id, task_description, placeWork_id, operation_id, expedient_id, start, pause, finish, notice } = note
    let newNote = {}
	switch (codeReasonId) {
		case '1':
			newNote = {
				date: date,
				code_reason_id: code_reason_id,
				description_reason_id: description_reason_id,
				di_id: di_id === '' ? null : di_id,
				os_id: os_id === '' ? null : os_id,
				task_description: task_description,
				placeWork_id: placeWork_id,
				operation_id: operation_id,
				expedient_id: expedient_id,
				start: start,
				pause: pause,
				finish: finish,
				notice: notice,
				note_status: 'INCLUÍDO',
			}
		break

		case '2':
		case '3':
		case '4':
		case '7':
		case '8':
			newNote = {
				date: date,
				code_reason_id: code_reason_id,
				description_reason_id: description_reason_id,
				di_id: di_id === '' ? null : di_id,
				os_id: os_id === '' ? null : os_id,
				task_description: task_description,
				placeWork_id: placeWork_id,
				operation_id: operation_id === '' ? null : operation_id,
				expedient_id: expedient_id,
				start: start,
				pause: pause,
				finish: finish,
				notice: notice,
				note_status: 'INCLUÍDO',
			}
			break
			case '10':
				newNote = {
					date: date,
					code_reason_id: code_reason_id,
					description_reason_id: description_reason_id,
					di_id: di_id === '' ? null : di_id,
					os_id: os_id === '' ? null : os_id,
					task_description: task_description,
					placeWork_id: placeWork_id === '' ? null : placeWork_id,
					operation_id: operation_id === '' ? null : operation_id,
					expedient_id: expedient_id,
					start: start,
					pause: pause,
					finish: finish,
					notice: notice,
					note_status: 'INCLUÍDO',
				}
				break

		default:
			newNote = {
				date: date,
				code_reason_id: code_reason_id,
				description_reason_id: description_reason_id,
				di_id: di_id,
				os_id: os_id,
				task_description: task_description,
				placeWork_id: placeWork_id,
				operation_id: operation_id,
				expedient_id: expedient_id,
				start: start,
				pause: pause,
				finish: finish,
				notice: notice,
				note_status: 'INCLUÍDO',
			}
	}
	return newNote
}

export default validationNote