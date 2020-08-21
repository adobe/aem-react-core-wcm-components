/*
 *  Copyright 2020 Adobe
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

'use strict';

module.exports = {
    preset: "ts-jest",
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: ['<rootDir>/**/*.test.ts','<rootDir>/**/*.test.tsx'],
    testPathIgnorePatterns: [
        'node_modules',
        'lib',
        'dist',
        'node'
    ],
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}'
    ],
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/lib/",
        "/dist/",
        "/node/",
        "TestComponentMapping.tsx",
        "TestComponentMapping.d.ts"

    ],
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    moduleNameMapper: {
        "^@adobe/(.*)$": ["<rootDir>/node_modules/@adobe/$1"]
    }
};