import { Router } from 'express'
import { calculateStatisticsHandler, getStatisticsHandler } from '../../controllers/statistics/statisticsController'

const router = Router()

router.post('/:QuestionId/calculate', calculateStatisticsHandler)
router.get('/:QuestionId', getStatisticsHandler)

export default router