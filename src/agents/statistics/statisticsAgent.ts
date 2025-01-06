import { getCollection } from '../../db'
import { ObjectId, WithId } from 'mongodb'
import { IQuestionOption } from '../../types/Question'
import { IUserResponse } from '../../types/UserRespone'
import { IStatistics } from '../../types/Statistic'

const calculateResponseStatistics = async (QuestionId: string, responses: WithId<IUserResponse>[], CorrectOptionId: ObjectId, totalResponses: number ) => {
    const correctResponses = responses.filter(response => response.optionId.toString() === CorrectOptionId?.toString()).length
    const incorrectResponses = totalResponses - correctResponses
    const accuracy = (correctResponses / totalResponses) * 100
    return {
      QuestionId,
      totalResponses,
      correctResponses,
      incorrectResponses,
      accuracy
    }
}

export const calculateStatisticsForQuestion = async (QuestionId: string): Promise<IStatistics | null> => {
  try {
    const collectionUserResponse = getCollection<IUserResponse>('userResponses')
    const collectionQuestionOption = getCollection<IQuestionOption>('options')
    const responses = await collectionUserResponse.find({ QuestionId: new ObjectId(QuestionId) }).toArray()
    const totalResponses = responses.length

    if (totalResponses === 0) {
      return {
        QuestionId,
        totalResponses: 0,
        correctResponses: 0,
        incorrectResponses: 0,
        accuracy: 0
      }
    }

    const correctOption = await collectionQuestionOption.findOne({ QuestionId: new ObjectId(QuestionId), isCorrect: true })
    if (!correctOption) {
        return null
    }

    const statistics = calculateResponseStatistics(QuestionId, responses, correctOption._id, totalResponses)

    return statistics
  } catch (error) {
    console.error('Error when calculation statistics:', error)
    throw new Error('Error when calculation statistics')
  }
}

export const getStatisticsForQuestion = async (QuestionId: string): Promise<IStatistics | null> => {
  return await calculateStatisticsForQuestion(QuestionId)
}