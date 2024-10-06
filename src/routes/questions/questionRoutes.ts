import express from 'express'
import { createQuestionController, deleteQuestionController, getAllQuestionsController, getQuestionInstanceController, updateQuestionController } from '../../controllers/questions/questionController'

const router = express.Router()

router.post('/', createQuestionController)
router.get('/', getAllQuestionsController)
router.get('/:id', getQuestionInstanceController)
router.put('/:id', updateQuestionController)
router.delete('/:id', deleteQuestionController)

export default router