// Author: TrungQuanDev | https://youtube.com/@trungquandev
import axios from "axios"

// File này để dành tới bài học Clean Code rất hay:
// Cách custom axios instance với interceptors tự động lấy access token cũng như refresh token của Auth0 và và gán vào header trước khi gọi api.
const customAxiosInstance = axios.create()

export default customAxiosInstance
