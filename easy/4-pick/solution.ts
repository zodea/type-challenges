/**
 * 1. 返回一个对象
 * 2. 遍历K
 *    - in 能直接获取联合(union types)类型 [mapped](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
 * 3. 获取T[key]
 *    - 取值 [indexed](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
 * 4. 判断K是否存在T中
 *    - 约束 extends [generic constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)
 *    - keyof [lookup](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types)
 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

export default MyPick
