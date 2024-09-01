import { ObjectId } from "mongodb";

export interface IQuestion {
    _id?: ObjectId
    text: string
    options: string[]
    correctOption: number
    videoId?: ObjectId
  }