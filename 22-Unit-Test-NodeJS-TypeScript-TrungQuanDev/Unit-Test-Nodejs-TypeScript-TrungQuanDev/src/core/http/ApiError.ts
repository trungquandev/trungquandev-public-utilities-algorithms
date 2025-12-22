/** Author: @trungquandev (TrungQuanDev - Một Lập Trình Viên) - https://youtube.com/@trungquandev */
import { StatusCodes } from 'http-status-codes'

export class ApiError extends Error {
  statusCode: number
  details?: unknown

  constructor(statusCode: number, message: string, details?: unknown) {
    // Message cần truyền vào super() để class Error gốc có thể khởi tạo đúng cách và sử dụng được đầy đủ Error.captureStackTrace
    super(message)
    this.statusCode = statusCode
    this.details = details
    Object.setPrototypeOf(this, new.target.prototype) // Tránh lỗi prototype chain khi kế thừa từ Error (built-in object của JavaScript)
    Error.captureStackTrace(this, this.constructor) // Làm gọn gàng stack trace, dễ đọc, dễ debug
  }

  /** 400 Bad Request — Dữ liệu đầu vào không hợp lệ */
  static BadRequest(msg = 'Bad Request', details?: unknown) {
    return new ApiError(StatusCodes.BAD_REQUEST, msg, details)
  }
  // Sau này mở rộng thêm các static theo mã lỗi...
}
