/** Author: @trungquandev (TrungQuanDev - Một Lập Trình Viên) - https://youtube.com/@trungquandev */

import type { RequestHandler } from "express"

/**
 * Cách bọc toàn bộ Controller để Clean Code:
 * Lưu ý kỹ thuật này chúng ta bản chất vẫn bọc controller nhưng code sẽ bọc từ tầng Route.
 * Code trong các Controllers sẽ rất sạch, dễ viết test hơn, dễ dàng đọc, dễ hiểu khi nhìn tổng quan vào từ Route.
 * ...
 * asyncHandler(fn) nhận vào một hàm async.
 * Trả ra một middleware Express.
 * Nếu fn throw hoặc reject Promise > lỗi tự động chạy vào next(error) > đi xuống global error middleware.
 * Không cần try/catch thủ công ở mọi controller nữa.
 */
export function asyncHandler(handler: RequestHandler): RequestHandler {
  return (req, res, next) => {
    return Promise.resolve(handler(req, res, next)).catch(next)
  }
}
