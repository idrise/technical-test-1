import { Question } from '../screens/QuestionScreen'

export function getMaximumPoints(questions: Question[]): number {
  return questions.reduce(
    (acc, question) =>
      acc + Math.max(...question.answers.map((answer) => answer.points)),
    0,
  )
}
