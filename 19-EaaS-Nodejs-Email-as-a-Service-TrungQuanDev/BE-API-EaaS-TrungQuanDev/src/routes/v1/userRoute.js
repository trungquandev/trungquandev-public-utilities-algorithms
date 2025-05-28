// Author: TrungQuanDev: https://youtube.com/@trungquandev
import express from 'express'
import { userController } from '~/controllers/userController'

const Router = express.Router()

// API đăng ký tài khoản.
Router.route('/register')
  .post(userController.register)

export const userRoute = Router
