/**
 * 传入一个元组类型，并返回一个由元组遍历出的值所组成 **键/值** 的对象类型
 * 1. 返回一个对象
 * 2. 遍历array
 *    - T[number]
 * 3. 泛型T
 *    - [@ts-expect-error](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments)
 *      - 不可以是数组和对象
 *    - 条件约束 extends [generic constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)
 *      - boolean 对于数组而言，只有俩个值无法满足多个值的状态
 */
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

// typeof 将 js 转化成 ts 的类型
// as const 将 js 数组的值变成 常量类型

// js
// function tupleToObject(array) {
//   const result = {}
//   for (const val of array) {
//     result[val] = val
//   }
//   return result
// }

export default TupleToObject
