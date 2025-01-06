import { getCollection } from '../../db'
import { ObjectId } from 'mongodb'
import { IUserResponse } from '../../types/UserRespone'

export const createUserResponse = async (params: IUserResponse): Promise<boolean> => {
  try {
    const collectionUserResponse = getCollection<IUserResponse>('userResponses')
    const result = await collectionUserResponse.insertOne(params)
    return result.acknowledged
  } catch (error) {
    console.error('Error create response:', error)
    throw new Error('Error create response')
  }
}

export const updateUserResponse = async (id: string, params: Partial<IUserResponse>): Promise<boolean> => {
  try {
    const collectionUserResponse = getCollection<IUserResponse>('userResponses')
    const result = await collectionUserResponse.updateOne(
      { _id: new ObjectId(id) },
      { $set: params }
    )
    return result.modifiedCount > 0
  } catch (error) {
    console.error('Error update response:', error)
    throw new Error('Error update response')
  }
}

export const getUserResponseInstance = async (id: string): Promise<IUserResponse | null> => {
  try {
    const collectionUserResponse = getCollection<IUserResponse>('userResponses')
    return await collectionUserResponse.findOne({ _id: new ObjectId(id) })
  } catch (error) {
    console.error('Could not get response:', error)
    throw new Error('Error getting response')
  }
}

export const getUserResponsesByQuestionId = async (questionId: string): Promise<IUserResponse[] | null> => {
  try {
    const collectionUserResponse = getCollection<IUserResponse>('userResponses')
    return await collectionUserResponse.find({ questionId: new ObjectId(questionId) }).toArray()
  } catch (error) {
    console.error('Could not get responses:', error)
    throw new Error('Error getting responses')
  }
}

export const deleteUserResponse = async (id: string): Promise<void> => {
  try {
    const collectionUserResponse = getCollection<IUserResponse>('userResponses')
    await collectionUserResponse.deleteOne({ _id: new ObjectId(id) })
  } catch (error) {
    console.error('Could not delete user response:', error)
    throw new Error('Error delete user response')
  }
}