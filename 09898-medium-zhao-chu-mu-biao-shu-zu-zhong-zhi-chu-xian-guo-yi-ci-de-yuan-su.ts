// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import { ExpectFalse, NotEqual } from './test-utils'

type cases = [
  Expect<Equal<FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
  Expect<Equal<FindEles<[2, 2, 3, 3, 6, 6, 6]>, []>>,
  Expect<Equal<FindEles<[1, 2, 3]>, [1, 2, 3]>>
]

// ============= Your Code Here =============
type FindEles<T extends any[], Duplicates = never> = T extends [
  infer Head,
  ...infer Tail
]
  ? Head extends Duplicates
    ? FindEles<Tail, Duplicates>
    : Head extends Tail[number]
    ? FindEles<Tail, Duplicates | Head>
    : [Head, ...FindEles<Tail, Duplicates>]
  : []
