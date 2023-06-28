/**
 * YouTube: TrungQuanDev - Một Lập Trình Viên
 * Created by trungquandev.com's author on Jun 28, 2023
 */
/**
 * Capitalize the first letter of a string
 */
const capitalizeFirstLetter = (val) => {
  if (!val) return ''
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`
}

/**
 * Example:
 */
const stringTest = 'trungquandev'
const capString = capitalizeFirstLetter(stringTest)

console.log('stringTest:', stringTest)
console.log('capString:', capString)
/**
 * Results:
 * 
 * stringTest: Of course, nothing changes =))
 * capString: Trungquandev
 */