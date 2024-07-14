// Author: TrungQuanDev | https://youtube.com/@trungquandev
import axios from "axios"

// File này để dành tới bài học Clean Code rất hay:
// Cách custom axios instance với interceptors tự động lấy access token cũng như refresh token của Auth0 và và gán vào header trước khi gọi api.
const customAxiosInstance = axios.create()

// // Tương tự cách làm của redux ở đây:
// // https://redux.js.org/faq/code-structure#how-can-i-use-the-redux-store-in-non-component-files
// let getAccessTokenSilently
// export const injectFn = _getAccessTokenSilently => {
//   getAccessTokenSilently = _getAccessTokenSilently
// }

// // Request interceptor
// customAxiosInstance.interceptors.request.use(async (config) => {
//   const accessToken = await getAccessTokenSilently()
//   console.log('accessToken: ', accessToken)
//   config.headers.Authorization = `Bearer ${accessToken}`
//   return config
// })

export default customAxiosInstance
