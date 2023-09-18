// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Falsy = false | 0 | '' | null | undefined

type cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>
]

// ============= Your Code Here =============
type Filter<T extends any[], P> = T extends [infer Head, ...infer Tail]
  ? Head extends P
    ? [Head, ...Filter<Tail, P>]
    : Filter<Tail, P>
  : []

type Test = Filter<[0, 1, 2], Falsy>
