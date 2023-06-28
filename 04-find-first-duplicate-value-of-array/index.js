/**
 * https://trungquandev.com
 * --- Đề bài ---
 * - Cho một Array ví dụ ['a', 'b', 'a', 'd', 'd', 'e', 'b', 'x', 'y', 'z']
 * - Yêu cầu tìm phần tử bị duplicate đầu tiên trong Array (với độ phức tạp thuật toán tối ưu nhất có thể).
 */

const list = ['a', 'b', 'a', 'c', 'd', 'x', 'y', 'z']

const getFirstDuplicateValueOfArray = (array) => {
  let tmp = {}

  for (const value of array) {
    if (tmp[value]) return tmp[value]
    tmp[value] = value
  }

  return -1
}

const foundDupValue = getFirstDuplicateValueOfArray(list)
if (foundDupValue === -1) {
  console.log('No result found.')
} else {
  console.log(`First duplicate value is: ${foundDupValue}`)
}


