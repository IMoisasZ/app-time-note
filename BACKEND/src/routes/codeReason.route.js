import express from 'express'
import CodeReasonController from '../controllers/codeReason.controller.js'

const route = express.Router()

route.post('/', CodeReasonController.createCodeReason)
route.put('/', CodeReasonController.updateCodeReason)
route.get('/', CodeReasonController.getAllCodeReason)
route.get('/:code_reason_id', CodeReasonController.getCodeReason)

export default route