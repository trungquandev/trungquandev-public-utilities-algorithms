/** Author: @trungquandev (TrungQuanDev - Một Lập Trình Viên) - https://youtube.com/@trungquandev */

import dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config()

const schema = z.object({
  NODE_ENV: z.enum(['development','test', 'staging', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
  MONGO_URI: z.url(),
  LOG_LEVEL: z.string().default('info'),
  CORS_ORIGINS: z.string(),
  FRONTEND_BASE_URL: z.url(),
})

export const env = schema.parse(process.env)
