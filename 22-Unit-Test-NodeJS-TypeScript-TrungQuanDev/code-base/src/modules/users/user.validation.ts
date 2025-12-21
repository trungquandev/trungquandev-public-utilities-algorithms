/** Author: @trungquandev (TrungQuanDev - Một Lập Trình Viên) - https://youtube.com/@trungquandev */

import { z } from 'zod'

import { ZodEmptyObject } from '~/core/validate/validateRequest'

export const RegisterSchema = z.object({
  body: z.object({
    email: z.email(),
    username: z.string().min(2),
    password: z.string().min(8),
  }),
  query: ZodEmptyObject,
  params: ZodEmptyObject,
})
