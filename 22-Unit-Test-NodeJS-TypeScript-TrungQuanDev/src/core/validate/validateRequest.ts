/** Author: @trungquandev (TrungQuanDev - Một Lập Trình Viên) - https://youtube.com/@trungquandev */

import { Request, Response, NextFunction } from 'express'
import { z, ZodObject } from 'zod'

import { ApiError } from '~/core/http/ApiError'

// Empty object chung dành cho khia báo optional & empty
export const ZodEmptyObject = z.object({}).optional()

/**
 * Định nghĩa một middleware factory dùng Zod để:
 * - Validate đồng thời req.body, req.query, req.params
 * - Chuẩn hóa lỗi validate thành ApiError.BadRequest
 * - Chặn request ngay từ layer router/middleware trước khi vào controller
 * Kiến trúc dự án: route > validate > controller > service > repo
 */
export function validateRequest(schema: ZodObject) {
  return (req: Request, res: Response, next: NextFunction) => {
    // Schema có khai báo cái gì thì ở đây sẽ validate cái đó, không khai báo thì sẽ pass qua
    const result = schema.safeParse({
      body: req.body,
      query: req.query,
      params: req.params,
    })
    // Validate failed, chặn request ở bước này.
    if (!result.success) {
      const details = result.error.issues.map((e) => ({
        path: e.path.join('.'),
        message: e.message,
      }))
      throw ApiError.BadRequest(
        `Validation error: ${details.map(i => i.path).join(', ')}`,
        details
      )
    }
    // Cho phép request hợp lệ đi tiếp
    next()
  }
}
