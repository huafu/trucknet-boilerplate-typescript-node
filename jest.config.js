const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  preset: "ts-jest",
  errorOnDeprecated: true,
  coverageReporters: ["json-summary", "text", "html"],
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec).ts?(x)"],
  collectCoverageFrom: ["src/**/*.ts"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
};
