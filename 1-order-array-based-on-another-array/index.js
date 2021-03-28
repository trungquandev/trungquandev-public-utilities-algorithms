/**
 * Created by trungquandev.com's author on 03/28/2021
 * ---
 * Order an array of objects based on another array order
 * ---
 * @param {*} array
 * @param {*} order
 * @param {*} key 
 * @returns 
 */
const mapOrder = (array, order, key) => {
  array.sort((a, b) => order.indexOf(a[key]) - order.indexOf(b[key]))
  return array
}

/**
 * Example:
 */
const itemArray = [
  { id: 1, label: 'One'},
  { id: 2, label: 'Two' },
  { id: 3, label: 'Three' },
  { id: 4, label: 'Four' },
  { id: 5, label: 'Five' }
]
const itemOrder = [5, 4, 2, 3, 1]

const orderedArray = mapOrder(itemArray, itemOrder, 'id')
console.log('Ordered array:', orderedArray)
/**
 * Results:
 * 
 * Ordered array:
 *   [
    *  {"id":5,"label":"Five"},
    *  {"id":4,"label":"Four"},
    *  {"id":2,"label":"Two"},
    *  {"id":3,"label":"Three"},
    *  {"id":1,"label":"One"}
  *  ]
 */
