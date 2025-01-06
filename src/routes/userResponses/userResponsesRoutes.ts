import express from 'express'
import { createUserResponseHandler, deleteUserResponseHandler, getUserResponseHandler, getUserResponsesByQuestionHandler, updateUserResponseHandler } from '../../controllers/userResponses/userResponsesController'

const router = express.Router()

router.post('/', createUserResponseHandler)
router.put('/:id', updateUserResponseHandler)
router.get('/:id', getUserResponseHandler)
router.get('/question/:QuestionId', getUserResponsesByQuestionHandler)
router.delete('/:id', deleteUserResponseHandler)

export default router