import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  rootDir: '.',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'node',
  testMatch: ['src/**/*.test.ts', '**/tests/**/*.test.ts'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
};

export default config;
