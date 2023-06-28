/**
 * Created by trungquandev.com's author on March 28, 2021
 * Updated by trungquandev.com's author on Jun 28, 2023
 * ---
 * Order an array of objects based on another array & return new Ordered Array
 * The original array will not be modified.
 * ---
 * @param {*} originalArray
 * @param {*} orderArray
 * @param {*} key = Key to order
 * @return new Ordered Array
 *
 * For Vietnamese with love :D
 * Xác định các phần tử trong array gốc ban đầu (originalArray) xem nó nằm ở đâu trong array thứ 2 (orderArray) (là array mà mình dùng để sắp xếp) bằng cách tìm index (indexOf) rồi sẽ sắp xếp theo index đó bằng hàm sort của Javascript. 
 */

const mapOrder = (originalArray, orderArray, key) => {
  if (!originalArray || !orderArray || !key) return []

  const clonedArray = [...originalArray]
  const orderedArray = clonedArray.sort((a, b) => {
    return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key])
  })

  return orderedArray
}

/**
 * Example:
 */
const originalItems = [
  { id: 'id-1', name: 'One' },
  { id: 'id-2', name: 'Two' },
  { id: 'id-3', name: 'Three' },
  { id: 'id-4', name: 'Four' },
  { id: 'id-5', name: 'Five' }
]
const itemOrderIds = ['id-5', 'id-4', 'id-2', 'id-3', 'id-1']
const key = 'id'

const orderedArray = mapOrder(originalItems, itemOrderIds, key)
console.log('Original:', originalItems)
console.log('Ordered:', orderedArray)
/**
 * Results:
 * 
 * Original: Of course, nothing changes =))
 * 
 * Ordered:
 *  [
      { id: 'id-5', name: 'Five' },
      { id: 'id-4', name: 'Four' },
      { id: 'id-2', name: 'Two' },
      { id: 'id-3', name: 'Three' },
      { id: 'id-1', name: 'One' }
  * ]
 */
