/** Author: @trungquandev (TrungQuanDev - Một Lập Trình Viên) - https://youtube.com/@trungquandev */

import cors, { CorsOptions } from 'cors'

import { env } from '~/config/env'

const allowedOrigins = env.CORS_ORIGINS.split(',').map(o => o.trim())

// Cấu hình CORS chi tiết
const corsOptions: CorsOptions = {
  origin(origin, callback) {
    // Cho phép nếu không có origin (ví dụ Postman, curl)
    if (!origin) return callback(null, true)

    if (allowedOrigins.includes(origin)) {
      return callback(null, true)
    }
    // Nếu domain không được phép
    callback(new Error(`Origin ${origin} not allowed by CORS`))
  },
  credentials: true, // cho phép gửi cookies/authorization header
  optionsSuccessStatus: 204, // status code cho preflight (OPTIONS)
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
  ],
}

export const corsMiddleware = cors(corsOptions)
