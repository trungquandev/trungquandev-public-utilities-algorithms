// Author: TrungQuanDev | https://youtube.com/@trungquandev
/**
 * Để demo và tập trung vào đúng nội dung chính nên phần Cors này mình không config gì nhiều, cho phép pass qua tất cả request.
 * Nếu muốn cấu hình CORS Option chuyên sâu hơn trong dự án thực tế thì xem Video số 62 trong chuỗi MERN Stack Pro của mình.
 * Link: https://youtu.be/iYgAWJ2Djkw
 */
export const corsOptions = {
  origin: function (origin, callback) {
    // Cho phép pass qua mọi request origin.
    return callback(null, true)
  },

  // Some legacy browsers (IE11, various SmartTVs) choke on 204
  optionsSuccessStatus: 200,

  // CORS sẽ cho phép nhận cookies từ request
  credentials: true
}
