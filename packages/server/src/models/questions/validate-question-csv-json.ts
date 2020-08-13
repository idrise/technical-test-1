const keysToMatch = [
  '0 points',
  '2 points',
  '4 points',
  '6 points',
  'Question',
].sort()

export function validateQuestionCsvJson(
  csvAsJson: Record<string, string>[],
): boolean {
  return csvAsJson.every((line) => {
    const keys = Object.keys(line).sort()
    return keys.every((key, index) => key === keysToMatch[index])
  })
}
