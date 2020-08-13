import { Router, Request, Response } from 'express'
import { getQuestionsFromCsv } from '../models'
import path from 'path'

export const questionRouter = Router()

questionRouter.get('/questions', async (req: Request, res: Response) => {
  try {
    const questions = await getQuestionsFromCsv(
      path.join(__dirname, '../../data/Alcohol_Intake - Sheet1.csv'),
    )
    return res.json(questions)
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    })
  }
})
