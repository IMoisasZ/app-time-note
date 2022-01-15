import express from 'express'
import StatusDiController from '../controllers/statusDi.controller.js'

const router = express.Router()

router.post('/', StatusDiController.createStatusDi)
router.put('/', StatusDiController.updatedStatusDi)
router.get('/', StatusDiController.getAllStatusDi)
router.get('/:statusDi_id', StatusDiController.getStatusDi)

export default router
