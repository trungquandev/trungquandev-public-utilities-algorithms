import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  moduleNameMapper: { '^~/(.*)$': '<rootDir>/src/$1' },
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'], // Khai báo file jest.setup.ts sẽ chạy sau khi Jest khởi tạo môi trường test ENV.
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/index.ts'],
};
export default config
