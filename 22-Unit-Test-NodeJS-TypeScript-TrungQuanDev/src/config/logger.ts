/** Author: @trungquandev (TrungQuanDev - Một Lập Trình Viên) - https://youtube.com/@trungquandev */

import pino from 'pino'
export const logger = pino({ level: process.env.LOG_LEVEL || 'info' })
