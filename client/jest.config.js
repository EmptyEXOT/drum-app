/** @type {import('ts-jest').JestConfigWithTsJest} */
const path = require("path");
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // moduleNameMapper: {
  //   "@": path.resolve(__dirname, 'src')
  // }
};