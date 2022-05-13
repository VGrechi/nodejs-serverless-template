module.exports = {
    verbose: true,
    collectCoverageFrom: [
        "./src/**/*.*",
        "!**/node_modules/**",
        "!**/vendor/**"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleFileExtensions: [
        "ts",
        "js",
        "json"
    ],
    testRegex: "^.+\\.spec\\.ts$",
    testEnvironment: "node"
}

process.env = Object.assign(process.env, {
    LOG_LEVEL: 'error'
  });