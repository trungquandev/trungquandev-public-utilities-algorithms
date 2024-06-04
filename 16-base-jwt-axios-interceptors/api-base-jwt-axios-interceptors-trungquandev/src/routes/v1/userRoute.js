// Author: TrungQuanDev: https://youtube.com/@trungquandev
import express from 'express'
import { userController } from '~/controllers/userController'

const Router = express.Router()

// API đăng nhập.
Router.route('/login')
  .post(userController.login)

// API đăng xuất.
Router.route('/logout')
  .delete(userController.logout)

// API Refresh Token - Cấp lại Access Token mới.
Router.route('/refresh_token')
  .put(userController.refreshToken)

export const userRoute = Router
