import { Schema, model } from 'mongoose'

const videoSchema = new Schema({
    title: { 
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    url: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Video = model('Video', videoSchema)

export default Video