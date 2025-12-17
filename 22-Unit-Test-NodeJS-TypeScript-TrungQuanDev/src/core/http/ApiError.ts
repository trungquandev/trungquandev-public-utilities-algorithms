/** Author: @trungquandev (TrungQuanDev - Một Lập Trình Viên) - https://youtube.com/@trungquandev */
import { StatusCodes } from 'http-status-codes'

export class ApiError extends Error {
  statusCode: number
  details?: unknown

  constructor(statusCode: number, message: string, details?: unknown) {
    super(message)
    this.statusCode = statusCode
    this.details = details
    Object.setPrototypeOf(this, new.target.prototype)
    Error.captureStackTrace(this, this.constructor)
  }

  /** 400 Bad Request — Dữ liệu đầu vào không hợp lệ */
  static BadRequest(msg = 'Bad Request', details?: unknown) {
    return new ApiError(StatusCodes.BAD_REQUEST, msg, details)
  }
  // Sau này mở rộng thêm các static theo mã lỗi...
}
