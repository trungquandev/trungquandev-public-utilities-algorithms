// Author: TrungQuanDev | https://youtube.com/@trungquandev
import express from 'express'
import { userController } from '~/controllers/userController'

const Router = express.Router()

Router.route('/login')
  .post(userController.login)

Router.route('/:id/logout')
  .delete(userController.logout)

Router.route('/:id')
  .get(userController.getUser)


export const userRoute = Router
