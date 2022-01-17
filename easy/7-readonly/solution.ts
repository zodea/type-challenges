/**
 * 接受一个 **泛型T** ，返回一个完全一样的类型，只是所有属性都被 `readonly` 所修饰
 * 1. 返回一个对象
 * 2. 遍历泛型T
 *    - in -> [mapped](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
 *    - keyof -> [lookup](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types)
 * 3. 给每个属性添加一个 `readonly` 修饰符
 *    - [readonly](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)
 * 4. 返回当前属性类型
 *    - [indexed](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
 */
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

// js 实现
// function readonly(obj) {
//   const result = {}

//   for (const key in obj) {
//     result['readonly' + key] = obj[key]
//   }
//   return result
// }

export default MyReadonly
