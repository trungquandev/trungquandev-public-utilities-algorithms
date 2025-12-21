/** Author: @trungquandev (TrungQuanDev - Một Lập Trình Viên) - https://youtube.com/@trungquandev */

import { Router } from 'express'

import { asyncHandler } from '~/core/asyncHandler'
import { validateRequest } from '~/core/validate/validateRequest'
import { UserController } from '~/modules/users/user.controller'
import { RegisterSchema } from '~/modules/users/user.validation'

const r = Router()
r.post('/register', validateRequest(RegisterSchema), asyncHandler(UserController.register))
r.get('/list', asyncHandler(UserController.list))
export default r
