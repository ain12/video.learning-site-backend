import { Router } from 'express'
import questionRoutes from './questions/questionRoutes'
import questionOptionsRoutes from './questions/questionOptionsRoutes'

const router = Router()


//Questions
router.use('/questions', questionRoutes)
router.use('/questions/:QuestionId/options', questionOptionsRoutes)

export default router