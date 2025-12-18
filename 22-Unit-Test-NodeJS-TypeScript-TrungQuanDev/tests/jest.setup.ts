/** Author: @trungquandev (TrungQuanDev - Một Lập Trình Viên) - https://youtube.com/@trungquandev */

// Chuẩn hóa môi trường test
process.env.NODE_ENV = 'test'

// Chạy 1 lần trước toàn bộ test
beforeAll(() => {
  // Tắt bớt log cho sạch output, tùy dự án
  jest.spyOn(console, 'log').mockImplementation(() => {})
  jest.spyOn(console, 'info').mockImplementation(() => {})
  jest.spyOn(console, 'warn').mockImplementation(() => {})
  // Gữ console.error để dễ debug, hoặc tắt nốt nếu muốn, tùy nhé
  // jest.spyOn(console, 'error').mockImplementation(() => {})
})

// Chạy sau mỗi test case
afterEach(() => {
  // Xóa lịch sử call mock
  jest.clearAllMocks()
  // Reset cache của module require/import (require)
  jest.resetModules()
  // Restore tất cả spyOn về implementation gốc
  jest.restoreAllMocks()
})
