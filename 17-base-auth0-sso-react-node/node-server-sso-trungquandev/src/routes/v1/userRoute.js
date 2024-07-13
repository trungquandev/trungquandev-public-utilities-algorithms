// Author: TrungQuanDev | https://youtube.com/@trungquandev
import express from 'express'
import { userController } from '~/controllers/userController'
// import { authMiddleware } from '~/middlewares/authMiddleware'

const Router = express.Router()

// Private: API nhận thông tin user từ Auth0 và tạo mới bản ghi vào Database của dự án (cần xác thực accessToken)
Router.route('/private/hook/login')
  .post(userController.hookLogin)

// Private: API get toàn bộ user (cần xác thực accessToken)
Router.route('/private/get_all')
  .get(userController.getAll)

// Public: API get toàn bộ user (Không cần xác thực accessToken)
Router.route('/public/get_all')
  .get(userController.getAll)

// Public: API xóa một user theo email (dùng để test xóa user cho nhanh)
Router.route('/public/delete/:email')
  .delete(userController.deleteByEmail)

export const userRoute = Router
