/**
 * YouTube: TrungQuanDev - Một Lập Trình Viên
 * Created by trungquandev.com's author on Sep 27, 2023
 */
/**
 * Simple method to Convert a String to Slug
 * Các bạn có thể tham khảo thêm kiến thức liên quan ở đây: https://byby.dev/js-slugify-string
 */
const slugify = (val) => {
  if (!val) return ''
  return val
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-') // remove consecutive hyphens
}

/**
 * Example:
 */
const originalStringTest = 'TrungQuanDev Một Lập Trình Viên'
const slug = slugify(originalStringTest)

console.log('originalStringTest:', originalStringTest)
console.log('slug:', slug)
/**
 * Results:
 * 
 * originalStringTest: 'TrungQuanDev Một Lập Trình Viên'
 * capString: trungquandev-mot-lap-trinh-vien
 */