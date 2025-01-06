import { Router } from 'express'
import questionRoutes from './questions/questionRoutes'
import questionOptionsRoutes from './questions/questionOptionsRoutes'
import statisticsRoutes from './statistiscs/statisticsRoutes'
import videosRoutes from './videos/videosRoutes'
import userResponsesRoutes from './userResponses/userResponsesRoutes'

const router = Router()


//Questions
router.use('/questions', questionRoutes)
router.use('/questions/:QuestionId/options', questionOptionsRoutes)

//Videos
router.use('/videos', videosRoutes)

// Statistics
router.use('/statistics', statisticsRoutes)

// User responses
router.use('/userResponse', userResponsesRoutes)

export default router