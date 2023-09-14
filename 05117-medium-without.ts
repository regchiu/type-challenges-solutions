// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
]

// ============= Your Code Here =============
type ToUnion<T> = T extends unknown[] ? T[number] : T

type Without<T, U> = T extends [infer Head, ...infer Tail]
  ? Head extends ToUnion<U>
    ? Without<Tail, U>
    : [Head, ...Without<Tail, U>]
  : []
