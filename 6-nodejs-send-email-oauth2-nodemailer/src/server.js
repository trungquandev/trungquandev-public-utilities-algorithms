/**
 * Created by trungquandev.com's author on 05/16/2022
 * NodeJS send email by OAuth2 and Nodemailer
 * Tutorial here: https://trungquandev.com/nodejs-viet-api-gui-email-voi-oauth2-va-nodemailer
 */

// Import 3 thư viện cần thiết
import express from 'express'
import nodemailer from 'nodemailer'
import { OAuth2Client } from 'google-auth-library'

// Khởi tạo NodeJS App bằng Express
const app = express()

// Cho phép nhận data thông qua req.body của API gửi lên.
app.use(express.json())

/**
 * Những biến sau trong thực tế nên đưa vào biến môi trường ENV vì mục đích bảo mật hơn.
 * Các bạn có thể tham khảo khóa Lập Trình MERN Stack nâng cao trên kênh YouTube:
 *  Trungquandev Official của mình để học cách triển khai & tổ chức code như đi làm thực tế nhé.
 * Link: https://www.youtube.com/c/TrungquandevOfficial/
 */
const APP_PORT = 3000
const APP_HOST = 'localhost'
const GOOGLE_MAILER_CLIENT_ID = 'Nhập OAuth Client ID của bạn vào đây.'
const GOOGLE_MAILER_CLIENT_SECRET = 'Nhập OAuth Client Secret của bạn vào đây.'
const GOOGLE_MAILER_REFRESH_TOKEN = 'Nhập Refresh Token của bạn vào đây.'
const ADMIN_EMAIL_ADDRESS = 'Nhập Email của bạn vào đây. (Chính là cái email mà mình đã hướng dẫn thêm vào trong phần Test Users)'

// Khởi tạo OAuth2Client với Client ID và Client Secret 
const myOAuth2Client = new OAuth2Client(
  GOOGLE_MAILER_CLIENT_ID,
  GOOGLE_MAILER_CLIENT_SECRET
)
// Set Refresh Token vào OAuth2Client Credentials
myOAuth2Client.setCredentials({
  refresh_token: GOOGLE_MAILER_REFRESH_TOKEN
})

// Tạo API /email/send với method POST
app.post('/email/send', async (req, res) => {
  try {
    // Lấy thông tin gửi lên từ client qua body
    const { email, subject, content } = req.body
    if (!email || !subject || !content) throw new Error('Please provide email, subject and content!')

    /**
     * Lấy AccessToken từ RefreshToken (bởi vì Access Token cứ một khoảng thời gian ngắn sẽ bị hết hạn)
     * Vì vậy mỗi lần sử dụng Access Token, chúng ta sẽ generate ra một thằng mới là chắc chắn nhất.
     */
    const myAccessTokenObject = await myOAuth2Client.getAccessToken()
    // Access Token sẽ nằm trong property 'token' trong Object mà chúng ta vừa get được ở trên
    const myAccessToken = myAccessTokenObject?.token

    // Tạo một biến Transport từ Nodemailer với đầy đủ cấu hình, dùng để gọi hành động gửi mail
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: ADMIN_EMAIL_ADDRESS,
        clientId: GOOGLE_MAILER_CLIENT_ID,
        clientSecret: GOOGLE_MAILER_CLIENT_SECRET,
        refresh_token: GOOGLE_MAILER_REFRESH_TOKEN,
        accessToken: myAccessToken
      }
    })

    // mailOption là những thông tin gửi từ phía client lên thông qua API
    const mailOptions = {
      to: email, // Gửi đến ai?
      subject: subject, // Tiêu đề email
      html: `<h3>${content}</h3>` // Nội dung email
    }

    // Gọi hành động gửi email
    await transport.sendMail(mailOptions)

    // Không có lỗi gì thì trả về success
    res.status(200).json({ message: 'Email sent successfully.' })
  } catch (error) {
    // Có lỗi thì các bạn log ở đây cũng như gửi message lỗi về phía client
    console.log(error)
    res.status(500).json({ errors: error.message })
  }
})

// Run application
app.listen(APP_PORT, APP_HOST, () => {
  console.log(`Hello Trungquandev Official, I'm running at ${APP_HOST}:${APP_PORT}/`)
})
