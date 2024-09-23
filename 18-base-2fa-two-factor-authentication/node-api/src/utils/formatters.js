import { pick } from 'lodash'

// Chỉ định sẽ lấy những dữ liệu cụ thể nào trong User để tránh việc trả về các dữ liệu nhạy cảm như hash password
// Note: Có thể dùng omit để làm ngược lại so với pick nếu bạn muốn
export const pickUser = (user) => {
  if (!user) return {}
  return pick(user, ['_id', 'email', 'username', 'youtube', 'require_2fa', 'is_2fa_verified'])
}
