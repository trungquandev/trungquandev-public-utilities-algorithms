/** Author: @trungquandev (TrungQuanDev - Một Lập Trình Viên) - https://youtube.com/@trungquandev */
import bcrypt from 'bcryptjs'

const SALT_ROUNDS = 12
// 12 là mức cân bằng tốt giữa bảo mật và hiệu năng cho production
// Có thể giảm xuống 10 nếu hệ thống rất lớn
// Có thể tăng lên 13–14 nếu hệ thống nhạy cảm

/**
 * Hash plain text password
 * - Dùng bcryptjs
 * - Trả về hash để lưu DB
 */
export async function hashPassword(plainPassword: string): Promise<string> {
  const salt = await bcrypt.genSalt(SALT_ROUNDS)
  return bcrypt.hash(plainPassword, salt)
}

/**
 * Compare plain password với hash trong DB
 * - Dùng khi login
 */
export async function verifyPassword(
  plainPassword: string,
  passwordHash: string
): Promise<boolean> {
  return bcrypt.compare(plainPassword, passwordHash)
}
