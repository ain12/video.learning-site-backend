import { ObjectId } from "mongodb"
import { IQuestion } from "./Question"

export interface IVideo {
    _id?: ObjectId
    title: string
    url: string
    duration: number
    description?: string
    createdAt: Date
    questions?: IQuestion[]
}