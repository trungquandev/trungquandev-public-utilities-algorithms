// Author: TrungQuanDev: https://youtube.com/@trungquandev
import express from 'express'
import { dashboardController } from '~/controllers/dashboardController'

const Router = express.Router()

Router.route('/access')
  .get(dashboardController.access)

export const dashboardRoute = Router
