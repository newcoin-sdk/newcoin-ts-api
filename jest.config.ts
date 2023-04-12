import type {Config} from 'jest';

const config: Config = {
    roots: ["<rootDir>/test"],
    testMatch: [ '**/*.test.ts', '**/*.test.js' ],
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleDirectories: [
        "node_modules",
        "<rootDir>/src",
        "node_modulejs/ose/types"
    ],
    //runner: "jest-serial-runner",
    verbose: true,
};

export default config;