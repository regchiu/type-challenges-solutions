// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import { ExpectFalse, NotEqual } from './test-utils'

type cases = [
  // string -> null
  Expect<Equal<UnionReplace<number | string, [[string, null]]>, number | null>>,

  // Date -> string; Function -> undefined
  Expect<
    Equal<
      UnionReplace<
        Function | Date | object,
        [[Date, string], [Function, undefined]]
      >,
      undefined | string | object
    >
  >
]

// ============= Your Code Here =============
type UnionReplace<T, U extends [any, any][]> = U extends [
  infer Head,
  ...infer Tail extends [any, any][]
]
  ? Head extends [T, infer Replace]
    ? UnionReplace<Exclude<T, Head[0]> | Replace, Tail>
    : never
  : T
