// @ts-nocheck
// Author: TrungQuanDev | https://youtube.com/@trungquandev
/**
 * Đây là một ví dụ về cách sử dụng onExecutePostLogin Flow của Auth0 để gọi sang api backend của chúng ta
 */
const axios = require('axios')

const RENDER_API_ENDPOINT = '{your-render-api-endpoint}'
const AUTH0_CLIENT_ID = '{your-client-id}'
const AUTH0_CLIENT_SECRET = '{your-client-secret}'
const AUTH0_DOMAIN = '{your-auth0-domain}'

exports.onExecutePostLogin = async (event, api) => {
  // console.log('event.secrets: ', event.secrets)
  // const { AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET, AUTH0_DOMAIN } = event.secrets

  // Hàm này sẽ có nhiệm vụ lấy accessToken từ Auth0 và sử dụng nó để truy cập tới API của bạn
  const getAccessToken = async () => {
    const response = await axios.post(`https://${AUTH0_DOMAIN}/oauth/token`, {
      client_id: AUTH0_CLIENT_ID,
      client_secret: AUTH0_CLIENT_SECRET,
      audience: RENDER_API_ENDPOINT,
      grant_type: 'client_credentials'
    })
    return response.data.access_token
  }
  const accessToken = await getAccessToken()
  console.log('accessToken: ', accessToken)

  try {
    // THông tin user sau khi login qua Auth0 sẽ được lấy từ event.user
    console.log('event.user: ', event.user)
    // Gọi tới API trên server backend của chúng ta để lưu user vào Database
    await axios.post(`${RENDER_API_ENDPOINT}/api-v1/users/private/hook/login`, event.user, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
  } catch (error) {
    console.error('Error saving user to Back-end:', error)
    let errorMessage = error.message // Request failed with status code ...
    if (error.response?.data?.message) {
      errorMessage = error.response?.data?.message // Message từ API của chúng ta
    }
    api.access.deny(errorMessage)
  }
}
