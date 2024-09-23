// Author: TrungQuanDev | https://youtube.com/@trungquandev
import authorizedAxiosInstance from '~/utils/authorizedAxios'
import { API_ROOT } from '~/utils/constants'

export const loginAPI = async (data) => {
  const res = await authorizedAxiosInstance.post(`${API_ROOT}/v1/users/login`, data)
  return res.data
}

export const logoutAPI = async (userId) => {
  return await authorizedAxiosInstance.delete(`${API_ROOT}/v1/users/${userId}/logout`)
}

export const fetchUserAPI = async () => {
  // Lấy userInfo hiện tại từ LocalStorage
  const currentUser = JSON.parse(localStorage.getItem('userInfo'))

  // Thông thường sẽ không cần truyền userId vào trong api này nếu như đã triển khai JWT Access Token chuẩn vì Back-end sẽ lấy được userId từ trong payload của token. Recommend các bạn học bộ này trước rồi quay lại đây nếu chưa hiểu: https://www.youtube.com/playlist?list=PLP6tw4Zpj-RJwtNw9564QKFf93hWiDnR_
  // Còn trong ví dụ của chuỗi Two-Factor Authentication (2FA) này thì mình sẽ lấy userId từ localStorage và gửi vào API để lấy về thông tin mới nhất của user cho nhanh nhé.
  const res = await authorizedAxiosInstance.get(`${API_ROOT}/v1/users/${currentUser._id}`)
  const user = res.data

  // Update lại thông tin của user trong Localstorage sau mỗi lần fetch để đảm bảo thông tin mới nhất
  localStorage.setItem('userInfo', JSON.stringify(user))

  return user
}
