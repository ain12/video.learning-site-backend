import { getCollection } from '../../db'
import { ObjectId } from 'mongodb'
import { IVideo } from '../../types/Video'

export const createVideo = async (params: IVideo): Promise<boolean> => {
    const collectionVideo = getCollection<IVideo>('videos')
    try {
        const result = await collectionVideo.insertOne(params)
        return result.acknowledged
      } catch (error) {
        console.error('Error create video:', error)
        throw new Error('Error create video')
      }
}

export const updateVideo = async (id: string, params: Partial<IVideo>): Promise<boolean> => {
    const collectionVideo = getCollection<IVideo>('videos')
    try {
        const result = await collectionVideo.updateOne(
            {
                _id: new ObjectId(id)
            },
            {
                $set: params
            }
        )
        return result.modifiedCount > 0
    } catch (error) {
        console.error('Error update video:', error)
        throw new Error('Error update video')
    }
}

export const getVideoInstance = async (id: string): Promise<IVideo | null> => {
    const collectionVideo = getCollection<IVideo>('videos')
    try {
        return await collectionVideo.findOne({ _id: new ObjectId(id) })
    } catch (error) {
        console.error('Could not get video:', error)
        throw new Error('Error getting video')
    }
}

export const getAllVideos = async (whereOptions: Partial<IVideo>): Promise<IVideo[] | null> => {
    const collectionVideo = getCollection<IVideo>('videos')
    try {
        const myQuery = whereOptions || {}
        return await collectionVideo.find(myQuery).toArray()
    } catch (error) {
        console.error('Could not get videos:', error)
        throw new Error('Error getting videos') 
    }
}

export const deleteVideo = async (VideoId: string): Promise<void> => {
    const collectionVideo = getCollection<IVideo>('videos')
    try {
        await collectionVideo.deleteOne({ _id: new ObjectId(VideoId) })
    } catch (error) {
        console.error('Could not get video:', error)
        throw new Error('Error getting video')
    }
  }