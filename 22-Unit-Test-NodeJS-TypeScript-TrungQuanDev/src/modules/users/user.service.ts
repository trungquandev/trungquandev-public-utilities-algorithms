/** Author: @trungquandev (TrungQuanDev - Một Lập Trình Viên) - https://youtube.com/@trungquandev */

import bcrypt from 'bcryptjs'

import { ApiError } from '~/core/http/ApiError'
import { UserRepo } from '~/modules/users/user.repo'
import { UserRole } from '~/modules/users/user.types'

export const UserService = {
  async register(email: string, username: string, password: string) {
    const existed = await UserRepo.findByEmail(email)
    if (existed) throw new ApiError(409, 'Email already exists')
    const passwordHash = await bcrypt.hash(password, 10)
    return UserRepo.create({
      email,
      username,
      password_hash: passwordHash,
      role: UserRole.USER
    })
  },
  async list() {
    return UserRepo.list()
  },
}
