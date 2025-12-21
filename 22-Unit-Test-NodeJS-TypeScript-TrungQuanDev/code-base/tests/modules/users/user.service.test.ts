/** Author: @trungquandev (TrungQuanDev - Một Lập Trình Viên) - https://youtube.com/@trungquandev */

import { UserService } from '~/modules/users/user.service'

describe('UserService', () => {
  it('should expose list()', () => {
    expect(typeof UserService.list).toBe('function')
  })
})
