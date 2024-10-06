import { ObjectId } from "mongodb";

export interface IQuestion {
    _id?: ObjectId
    text: string
    options: string[]
    correctOption: number
    videoId?: ObjectId
}

export interface IQuestionOption {
  _id?: ObjectId
  QuestionId: ObjectId
  text: string         
  isCorrect: boolean   
}