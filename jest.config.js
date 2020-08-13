/* eslint-disable */
module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html|tsx)$': 'ts-jest'
  },
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx'],
  coverageReporters: ['html'],
  extraGlobals: ['Math']
}
