// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>
]

// ============= Your Code Here =============
type Chunk<
  T extends unknown[],
  U extends number = 1,
  Acc extends unknown[] = []
> = T extends [infer Head, ...infer Tail]
  ? Acc['length'] extends U
    ? [Acc, ...Chunk<T, U>]
    : Chunk<Tail, U, [...Acc, Head]>
  : Acc['length'] extends 0
  ? Acc
  : [Acc]
