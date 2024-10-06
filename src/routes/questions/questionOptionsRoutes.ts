import { createQuestionOptionController, deleteQuestionOptionController, getAllQuestionOptionsController, getQuestionOptionInstanceController, updateQuestionOptionController } from "../../controllers/questions/questionOptionsController"
import { Router } from 'express'

const router = Router({ mergeParams: true })

router.post('/', createQuestionOptionController)
router.get('/', getAllQuestionOptionsController)
router.get('/:id', getQuestionOptionInstanceController)
router.put('/:id', updateQuestionOptionController)
router.delete('/:id', deleteQuestionOptionController)

export default router