/** Author: @trungquandev (TrungQuanDev - Một Lập Trình Viên) - https://youtube.com/@trungquandev */

import { Request, Response, NextFunction } from 'express'

import { env } from '~/config/env'
import { ApiError } from '~/core/http/ApiError'

/**
 * Quan Trọng: Nơi xử lý lỗi tập trung cho toàn bộ express app, gọi: app.use(errorHandler)
 */
export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  // Custom Api Error
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ message: err.message, details: err.details })
  }
  // Log chi tiết khi dev
  if (env.NODE_ENV === 'development') {
    console.error('[Unhandled Error]', err)
  }
  // Trả lỗi chung nếu chưa handle
  return res.status(500).json({ message: 'Internal Server Error' })
}
