import { Request, Response } from 'express'
import { createQuestionOption, deleteQuestionOption, getAllQuestionOptions, getQuestionOptionInstance, updateQuestionOption } from '../../agents/questions/questionOptionsAgent'

export const createQuestionOptionController = async (req: Request, res: Response): Promise<void> => {
    try {
      const success = await createQuestionOption(req.body)
      res.status(success ? 201 : 400).json({ success })
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
}

export const updateQuestionOptionController = async (req: Request, res: Response): Promise<void> => {
    try {
      const success = await updateQuestionOption(req.params.id, req.body)
      res.status(success ? 201 : 400).json({ success })
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
}

export const getQuestionOptionInstanceController = async (req: Request, res: Response): Promise<void> => {
    try {
      const QuestionOption = await getQuestionOptionInstance(req.params.id)
      if (QuestionOption) {
        res.status(200).json(QuestionOption)
      } else {
        res.status(404).json({ message: 'Error finding QuestionOption' })
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
}

export const getAllQuestionOptionsController = async (req: Request, res: Response): Promise<void> => {
    try {
      const QuestionOptions = await getAllQuestionOptions(req.query)
      res.status(200).json(QuestionOptions)
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
}

export const deleteQuestionOptionController = async (req: Request, res: Response): Promise<void> => {
    try {
      await deleteQuestionOption(req.params.id)
      res.status(204).send()
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
}