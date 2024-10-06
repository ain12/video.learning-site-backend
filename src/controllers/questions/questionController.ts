import { Request, Response } from 'express'
import { createQuestion, deleteQuestion, getAllQuestions, getQuestionInstance, updateQuestion } from '../../agents/questions/questionAgents'

export const createQuestionController = async (req: Request, res: Response): Promise<void> => {
    try {
      const success = await createQuestion(req.body)
      res.status(success ? 201 : 400).json({ success })
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
}

export const updateQuestionController = async (req: Request, res: Response): Promise<void> => {
    try {
      const success = await updateQuestion(req.params.id, req.body)
      res.status(success ? 201 : 400).json({ success })
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
}

export const getQuestionInstanceController = async (req: Request, res: Response): Promise<void> => {
    try {
      const question = await getQuestionInstance(req.params.id)
      if (question) {
        res.status(200).json(question)
      } else {
        res.status(404).json({ message: 'Error finding question' })
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
}

export const getAllQuestionsController = async (req: Request, res: Response): Promise<void> => {
    try {
      const questions = await getAllQuestions(req.query)
      res.status(200).json(questions)
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
}

export const deleteQuestionController = async (req: Request, res: Response): Promise<void> => {
    try {
      await deleteQuestion(req.params.id)
      res.status(204).send()
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
}