// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<
    Equal<
      UnionToIntersection<(() => 'foo') | ((i: 42) => true)>,
      (() => 'foo') & ((i: 42) => true)
    >
  >
]

// ============= Your Code Here =============
type ToUnionOfFunction<T> = T extends T ? (arg: T) => unknown : never

type UnionToIntersection<U> = ToUnionOfFunction<U> extends (
  a: infer U
) => unknown
  ? U
  : never

type Test = ToUnionOfFunction<(() => 'foo') | ((i: 42) => true)>
