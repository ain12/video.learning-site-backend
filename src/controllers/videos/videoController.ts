import { Request, Response } from 'express'
import { createVideo, deleteVideo, getAllVideos, getVideoInstance, updateVideo } from '../../agents/videos/videoAgent'

export const createVideoController = async (req: Request, res: Response): Promise<void> => {
    try {
      const success = await createVideo(req.body)
      res.status(success ? 201 : 400).json({ success })
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
}

export const updateVideoController = async (req: Request, res: Response): Promise<void> => {
    try {
      const success = await updateVideo(req.params.id, req.body)
      res.status(success ? 201 : 400).json({ success })
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
}

export const getVideoInstanceController = async (req: Request, res: Response): Promise<void> => {
    try {
      const video = await getVideoInstance(req.params.id)
      if (video) {
        res.status(200).json(video)
      } else {
        res.status(404).json({ message: 'Error finding video' })
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
}

export const getAllVideosController = async (req: Request, res: Response): Promise<void> => {
    try {
      const videos = await getAllVideos(req.query)
      res.status(200).json(videos)
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
}

export const deleteVideoController = async (req: Request, res: Response): Promise<void> => {
    try {
      await deleteVideo(req.params.id)
      res.status(204).send()
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
}