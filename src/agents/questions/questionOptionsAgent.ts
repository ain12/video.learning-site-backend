import { getCollection } from '../../db'
import { ObjectId } from 'mongodb'
import { IQuestionOption } from '../../types/Question'


export const createQuestionOption = async (params:IQuestionOption): Promise<boolean> => {
    const collectionQuestionOption = getCollection<IQuestionOption>('options')
    try {
     const result = await collectionQuestionOption.insertOne(params)
     return result.acknowledged
    } catch (error) {
        console.error('Error create question option:', error)
        throw new Error('Error create question option')
    }
}

export const updateQuestionOption = async (id: string, params: Partial<IQuestionOption>): Promise<boolean> => {
    const collectionQuestionOption = getCollection<IQuestionOption>('options')
    try {
        const result = await collectionQuestionOption.updateOne(
            {
                _id: new ObjectId(id)
            },
            {
                $set: params
            }
        )
        return result.modifiedCount > 0
    } catch (error) {
        console.error('Error update question option:', error)
        throw new Error('Error update question option')
    }
}

export const getQuestionOptionInstance = async (id: string): Promise<IQuestionOption | null> => {
    const collectionQuestionOption = getCollection<IQuestionOption>('options')
    try {
        return await collectionQuestionOption.findOne({ _id: new ObjectId(id) })
    } catch (error) {
        console.error('Could not get question option:', error)
        throw new Error('Error getting question option')
    }
}

export const getAllQuestionOptions = async (whereOptions: Partial<IQuestionOption>): Promise<IQuestionOption[] | null> => {
    const collectionQuestionOption = getCollection<IQuestionOption>('options')
    try {
        const myQuery = whereOptions || {}
        return await collectionQuestionOption.find(myQuery).toArray()    
    } catch (error) {
        console.error('Could not get question option:', error)
        throw new Error('Error getting question option')
    }
}

export const deleteQuestionOption = async (QuestionOptionId: string): Promise<void> => {
    const collectionQuestionOption = getCollection<IQuestionOption>('options')
    try {
        await collectionQuestionOption.deleteOne({ _id: new ObjectId(QuestionOptionId) })
    } catch (error) {
        console.error('Could not get Question:', error)
        throw new Error('Error getting Question')
    }
  }