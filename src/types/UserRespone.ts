import { ObjectId } from 'mongodb';

export interface IUserResponse {
  _id?: ObjectId
  userId: ObjectId       
  videoId: ObjectId     
  questionId: ObjectId   
  optionId: ObjectId     
  answeredAt: Date      
}

