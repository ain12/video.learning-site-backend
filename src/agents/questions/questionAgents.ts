import { getCollection } from '../../db'
import { ObjectId } from 'mongodb'
import { IQuestion } from '../../types/Question'


export const createQuestion = async (params:IQuestion): Promise<boolean> => {
    const collectionQuestion = getCollection<IQuestion>('questions')
    try {
     const result = await collectionQuestion.insertOne(params)
     return result.acknowledged
    } catch (error) {
        console.error('Error create question:', error)
        throw new Error('Error create question')
    }
}

export const updateQuestion = async (id: string, params: Partial<IQuestion>): Promise<boolean> => {
    const collectionQuestion = getCollection<IQuestion>('questions')
    try {
        const result = await collectionQuestion.updateOne(
            {
                _id: new ObjectId(id)
            },
            {
                $set: params
            }
        )
        return result.modifiedCount > 0
    } catch (error) {
        console.error('Error update Question:', error)
        throw new Error('Error update Question')
    }
}

export const getQuestionInstance = async (id: string): Promise<IQuestion | null> => {
    const collectionQuestion = getCollection<IQuestion>('questions')
    try {
        return await collectionQuestion.findOne({ _id: new ObjectId(id) })
    } catch (error) {
        console.error('Could not get question:', error)
        throw new Error('Error getting question')
    }
}

export const getAllQuestions = async (whereOptions: Partial<IQuestion>): Promise<IQuestion[] | null> => {
    const collectionQuestion = getCollection<IQuestion>('questions')
    try {
        const myQuery = whereOptions || {}
        return await collectionQuestion.find(myQuery).toArray()
    } catch (error) {
        console.error('Could not get questions:', error)
        throw new Error('Error getting questions') 
    }
}

export const deleteQuestion = async (QuestionId: string): Promise<void> => {
    const collectionQuestion = getCollection<IQuestion>('questions')
    try {
        await collectionQuestion.deleteOne({ _id: new ObjectId(QuestionId) })
    } catch (error) {
        console.error('Could not delete Question:', error)
        throw new Error('Error delete Question')
    }
}