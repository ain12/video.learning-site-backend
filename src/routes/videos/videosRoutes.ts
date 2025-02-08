import express from 'express'
import { createVideoController, deleteVideoController, getAllVideosController, getVideoInstanceController, updateVideoController } from '../../controllers/videos/videoController'
import multer from 'multer'

const router = express.Router()

const upload = multer({ storage: multer.memoryStorage() })


router.post('/', createVideoController)
router.post('/uploadVideo', upload.single('video'), createVideoController)
router.get('/', getAllVideosController)
router.get('/:id', getVideoInstanceController)
router.post('/:id', updateVideoController)
router.delete('/:id', deleteVideoController)

export default router