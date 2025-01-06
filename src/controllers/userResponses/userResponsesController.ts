import { Request, Response } from 'express'
import { createUserResponse, deleteUserResponse, getUserResponseInstance, getUserResponsesByQuestionId, updateUserResponse } from "../../agents/userResponses/userResposneAgent"
import { IUserResponse } from "../../types/UserRespone"

export const createUserResponseHandler = async (req: Request, res: Response) => {
    try {
        const userResponse: IUserResponse = req.body
        const success = await createUserResponse(userResponse)
        res.status(success ? 201 : 400).json({ success })
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}

export const updateUserResponseHandler = async (req: Request, res: Response) => {
    const { id } = req.params
    const params: Partial<IUserResponse> = req.body
    try {
        const success = await updateUserResponse(id, params)
        res.status(success ? 200 : 404).json({ success })
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}

export const getUserResponseHandler = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const response = await getUserResponseInstance(id)
        if (response) {
            res.status(200).json(response)
        } else {
            res.status(404).json({ message: 'Response not found' })
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}

export const getUserResponsesByQuestionHandler = async (req: Request, res: Response) => {
    const { QuestionId } = req.params
    try {
        const responses = await getUserResponsesByQuestionId(QuestionId)
        res.status(200).json(responses)
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}

export const deleteUserResponseHandler = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        await deleteUserResponse(id)
        res.status(204).send()
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}