function codeReasonA (codeReasonId, note){
    let newNote = {}
    	if (codeReasonId === '1') {
			newNote = {
				date: note.date,
				code_reason_id: note.code_reason_id,
				description_reason_id: note.description_reason_id,
				di_id: note.di_id === '' ? null : note.di_id,
				os_id: note.os_id === '' ? null : note.os_id,
				task_description: note.task_description,
				placeWork_id: note.placeWork_id,
				operation_id: note.operation_id,
				expedient_id: note.expedient_id,
				start: note.start,
				pause: note.pause,
				finish: note.finish,
				notice: note.notice,
				note_status: 'INCLUÍDO',
			}
		}
        return newNote
}

export default codeReasonA