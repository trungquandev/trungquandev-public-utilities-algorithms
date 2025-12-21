/** Author: @trungquandev (TrungQuanDev - Một Lập Trình Viên) - https://youtube.com/@trungquandev */

import cookieParser from 'cookie-parser'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import { corsMiddleware } from '~/config/cors'
import { errorHandler } from '~/core/http/errorHandler'
import routes from '~/routes'

export const createApp = () => {
  const app = express()

  app.set('trust proxy', true)

  app.disable('etag')

  app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate')
    res.setHeader('Pragma', 'no-cache')
    res.setHeader('Expires', '0')
    next()
  })

  app.use(helmet())
  app.use(corsMiddleware)
  app.use(express.json())
  app.use(cookieParser())
  app.use(morgan('dev')) // dev preset: Ngắn gọn, có màu, phù hợp môi trường dev
  
  app.use('/api', routes)

  // health
  app.get('/health', (_req, res) => res.json({ status: 'ok' }))

  // Important: must be last
  app.use(errorHandler)

  return app
}
