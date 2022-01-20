/**
 * 接收一个数组T，返回第一个元素的类型
 * 1. 返回一个值
 * 2. 获取数组的第一位
 * 3. 当长度为0时返回never
 */
type First<T extends any[]> = T extends [] ? never : T[0]
// `union`: 获取联合类型，判断数组第一项是否存在其中
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
// 获取 `tuple` 的 `length` 属性
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// 使用 `infer` 推断数组具有某个属性值
// type First<T extends any[]> = T extends [infer First, ...infer rest] ? First : never

// js
// function getFirst(array) {
//   return array[0]
//   const [first, ...rest] = array
//   return first
// }

export default First
