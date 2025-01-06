import { Request, Response } from 'express'
import { calculateStatisticsForQuestion, getStatisticsForQuestion } from "../../agents/statistics/statisticsAgent"

export const calculateStatisticsHandler = async (req: Request, res: Response) => {
    const { QuestionId } = req.params
    try {
        await calculateStatisticsForQuestion(QuestionId)
        res.status(200).json({ message: 'Statistics calculated' })
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}

export const getStatisticsHandler = async (req: Request, res: Response) => {
    const { QuestionId } = req.params
    try {
        const statistics = await getStatisticsForQuestion(QuestionId)
        res.status(statistics ? 200 : 404).json(statistics)
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}