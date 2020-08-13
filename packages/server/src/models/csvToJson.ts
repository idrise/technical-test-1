import fs from 'fs-extra'
import neatCsv from 'neat-csv'

export async function csvToJson(
  filePath: string,
): Promise<Record<string, string>[]> {
  const csvFile = await fs.readFile(filePath)
  return neatCsv(csvFile)
}
