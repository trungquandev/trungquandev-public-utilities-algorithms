// Author: TrungQuanDev | https://youtube.com/@trungquandev
import axios from 'axios'
import { toast } from 'react-toastify'

// Khởi tạo một đối tượng Axios (authorizedAxiosInstance) mục đích để custom và cấu hình chung cho dự án.
let authorizedAxiosInstance = axios.create()
// Thời gian chờ tối đa của 1 request: để 10 phút
authorizedAxiosInstance.defaults.timeout = 1000 * 60 * 10
// withCredentials: Sẽ cho phép axios tự động đính kèm và gửi cookie trong mỗi request lên BE (phục vụ trường hợp nếu chúng ta sử dụng JWT tokens (refresh & access) theo cơ chế httpOnly Cookie) Xem kỹ hơn về kiến thức này ở đây:
// https://www.youtube.com/playlist?list=PLP6tw4Zpj-RJwtNw9564QKFf93hWiDnR_
authorizedAxiosInstance.defaults.withCredentials = true

/**
 * Cấu hình Interceptors (Bộ đánh chặn vào giữa mọi Request & Response)
 * https://axios-http.com/docs/interceptors
 */
// Add a request interceptor: Can thiệp vào giữa những cái request API
authorizedAxiosInstance.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// Add a response interceptor: Can thiệp vào giữa những cái response nhận về từ API
authorizedAxiosInstance.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  /* Mọi mã http status code nằm trong khoảng 200 - 299 sẽ là success và rơi vào đây */
  return response
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  /* Mọi mã http status code nằm ngoài khoảng 200 - 299 sẽ là error và rơi vào đây */

  // Xử lý tập trung phần hiển thị thông báo lỗi trả về từ mọi API ở đây (viết code một lần: Clean Code)
  // console.log(error) ra là sẽ thấy cấu trúc data đẫn tới message lỗi như dưới đây
  // Dùng toastify để hiển thị bất kể mọi mã lỗi lên màn hình - Ngoại trừ mã 410 - GONE phục vụ việc tự động refresh lại token.
  if (error.response?.status !== 410) {
    toast.error(error.response?.data?.message || error?.message)
  }

  return Promise.reject(error)
})

export default authorizedAxiosInstance
