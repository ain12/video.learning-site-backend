import { getCollection } from '../../db'
import { ObjectId } from 'mongodb'
import { IVideo } from '../../types/Video'

const collectionVideo = getCollection<IVideo>('videos')

export const createVideo = async (params: IVideo): Promise<boolean> => {
    try {
        const result = await collectionVideo.insertOne(params)
        if(result) {
            return true
        }
        return false
      } catch (error) {
        console.error('Error create video:', error)
        throw new Error('Error create video')
      }
}

export const updateVideo = async (id: string, params: Partial<IVideo>): Promise<boolean> => {
    try {
        const result = await collectionVideo.updateOne(
            {
                _id: new ObjectId(id)
            },
            {
                $set: params
            }
        )
        if(result) {
            return true
        }
        return false
    } catch (error) {
        console.error('Error update video:', error)
        throw new Error('Error update video')
    }
}

export const getVideoInstance = async (id: string): Promise<IVideo | null> => {
    try {
        return await collectionVideo.findOne({ _id: new ObjectId(id) })
    } catch (error) {
        console.error('Could not get video:', error)
        throw new Error('Error getting video')
    }
}

export const getAllVideos = async (whereOptions: Partial<IVideo>): Promise<IVideo[] | null> => {
    try {
        const myQuery = whereOptions || {}
        return await collectionVideo.find(myQuery).toArray()
    } catch (error) {
        console.error('Could not get videos:', error)
        throw new Error('Error getting videos') 
    }
}

export const deleteVideo = async (videoId: string): Promise<void> => {
    try {
        await collectionVideo.deleteOne({ _id: new ObjectId(videoId) })
    } catch (error) {
        console.error('Could not get video:', error)
        throw new Error('Error getting video')
    }
  }