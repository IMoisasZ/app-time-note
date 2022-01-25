function validation(projectNote){
    const { di_id, os_id, code_reason_id, placeWork_id, operation_id} = projectNote
    console.log(projectNote);
    let message = {}

    switch (code_reason_id) {
        case '1':
            if(placeWork_id === '') return message={msg: 'O posto de trabalho é obrigatório!'}
            if(operation_id === '') return message={msg: 'A operação é obrigatória!'}
        break
        case '2':
        case '3':
        case '4':
        case '7':
        case '8':
            if(placeWork_id === '') return message={msg: 'O posto de trabalho é obrigatório!'}
        break
        case '5':
        case '6':
        case '9':
            if(di_id === null && os_id === null){
                return message={msg: 'A DI ou OS deve ser selecionado!'}
            }
            if(placeWork_id === '') return message={msg: 'O posto de trabalho é obrigatório!'}
            if(operation_id === '') return message={msg: 'A operação é obrigatória!'}
        break
    }

}

export default validation