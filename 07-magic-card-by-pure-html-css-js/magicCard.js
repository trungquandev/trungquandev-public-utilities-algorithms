/**
 * Created by trungquandev.com's author on 14/08/2020. (DD/MM/YYYY)
 * magicCard.js
 */
const magicCard = document.querySelector('.magic-card')

toggleRawBg = () => {
  if (magicCard.classList.contains('magic-card-raw')) {
    magicCard.classList.remove('magic-card-raw')
  } else {
    magicCard.classList.add('magic-card-raw')
  }
}

resetDefault = () => {
  const isRawMagicCard = magicCard.classList.contains('magic-card-raw')
  magicCard.setAttribute('class', `magic-card ${isRawMagicCard ? 'magic-card-raw' : ''}`)
}

customType = (className) => {
  // Nếu đã tồn tại class rồi thì không làm gì
  if (magicCard.classList.contains(className)) return

  // Trả về trạng thái mặc định trước khi thêm class mới
  resetDefault()
  
  magicCard.classList.add(className)
}
