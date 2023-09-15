// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<
    Equal<
      Subsequence<[1, 2, 3]>,
      [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3]
    >
  >
]

// ============= Your Code Here =============
type Subsequence<T extends any[]> = T extends [infer Head, ...infer Tail]
  ? Subsequence<Tail> | [Head, ...Subsequence<Tail>]
  : []

type Test = Subsequence<[1, 2]>
