/** Author: @trungquandev (TrungQuanDev - Một Lập Trình Viên) - https://youtube.com/@trungquandev */

// JSDoc type hint
/** @type {import('jest').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest', // Dùng ts-jest để biên dịch TypeScript khi chạy test.
  testEnvironment: 'node', // Mặc định Jest chạy trong môi trường Node.js
  roots: ['<rootDir>/tests'],
  moduleNameMapper: { '^~/(.*)$': '<rootDir>/src/$1' }, // ánh xạ alias khi import module. Cannot find module '~/...' khi chạy test. $1 ý nghĩa là phần còn lại sau './src/...'
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'], // Khai báo file jest.setup.ts sẽ chạy sau khi Jest khởi tạo môi trường test ENV.
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/index.ts'], // Tính coverage cho toàn bộ source TS - Loại trừ các file index thuần export không có logic gì.
}
