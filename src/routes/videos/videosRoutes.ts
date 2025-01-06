import express from 'express'
import { createVideoController, deleteVideoController, getAllVideosController, getVideoInstanceController, updateVideoController } from '../../controllers/videos/videoController'

const router = express.Router()

router.post('/', createVideoController)
router.get('/', getAllVideosController)
router.get('/:id', getVideoInstanceController)
router.put('/:id', updateVideoController)
router.delete('/:id', deleteVideoController)

export default router