import { validateQuestionCsvJson } from './validate-question-csv-json'
import { csvToJson } from '../csvToJson'

export interface Answer {
  answer: string
  points: number
}

export interface Question {
  question: string
  answers: Answer[]
}

export async function getQuestionsFromCsv(
  questionCSVFilePath: string,
): Promise<Question[]> {
  const csvAsJson = await csvToJson(questionCSVFilePath)
  if (!validateQuestionCsvJson(csvAsJson)) {
    throw new Error('CSV Format does not match schema')
  }
  return remapCsvQuestionToModel(csvAsJson)
}

export function remapCsvQuestionToModel(
  csvAsJson: Record<string, string>[],
): Question[] {
  return csvAsJson.map((csvLine: Record<string, string>) => ({
    question: csvLine['Question'],
    answers: Object.keys(csvLine)
      .filter((key) => key !== 'Question')
      .map((key) => {
        return {
          answer: csvLine[key],
          points: +key.split(' ')[0],
        }
      }),
  }))
}
