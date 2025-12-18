/** Author: @trungquandev (TrungQuanDev - Một Lập Trình Viên) - https://youtube.com/@trungquandev */


// Chuẩn hóa môi trường test (không ảnh hưởng tới các môi trường khác vì chỉ chạy trong tiến trình tesst)
process.env.NODE_ENV = 'test'

// Chuẩn hóa timezone về múi giờ chuẩn quốc tế UTC (tránh lệch giờ khi test các tính năng liên quan đến ngày tháng - Date)
process.env.TIMEZONE = process.env.TIMEZONE ?? 'UTC'

// Optional: giảm log trên môi trường CI (tùy dự án cần hay không)
const shouldMuteConsole = process.env.CI === 'true' || process.env.JEST_MUTE_CONSOLE === 'true'
if (shouldMuteConsole) {
  // beforeAll(): Chạy 1 lần trước toàn bộ test
  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {})
    jest.spyOn(console, 'info').mockImplementation(() => {})
    jest.spyOn(console, 'warn').mockImplementation(() => {})

    // Giữ console.error để dễ debug, tùy dự án
    // jest.spyOn(console, 'error').mockImplementation(() => {})
  })
}

/**
 * afterEach(): Chạy sau mỗi test case.
 * Cleanup sau mỗi test:
 * - clearAllMocks: xóa lịch sử gọi của các mock (calls/results/instances)
 * - restoreAllMocks: trả spyOn về implementation gốc (rất quan trọng sau khi sử dụng spyOn console/Date/Math/crypto...)
 */
afterEach(() => {
  jest.clearAllMocks()
  jest.restoreAllMocks()
})

/**
 * afterEach(): Chạy sau mỗi test case.
 * Nếu dự án có dùng dùng fake timers jest.useFakeTimers() thì mở đoạn code này để đảm bảo không ảnh hưởng tới các tests khác nhau.
 */
afterEach(() => {
  jest.useRealTimers()
})
