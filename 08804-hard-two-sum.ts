// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TwoSum<[3, 3], 6>, true>>,
  Expect<Equal<TwoSum<[3, 2, 4], 6>, true>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 15>, false>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 9>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 0>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 1>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 2>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 3>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 4>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 5>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 6>, false>>,
  Expect<Equal<TwoSum<[3, 2, 0], 2>, true>>
]

// ============= Your Code Here =============
type ConstructTuple<
  N,
  Count extends readonly '🐔'[] = []
> = Count['length'] extends N ? Count : ConstructTuple<N, [...Count, '🐔']>

type Add<X, Y> = [...ConstructTuple<X>, ...ConstructTuple<Y>]['length']

type TwoSumUnion<T extends number[], Index = 0, Acc = 0> = Index extends 2
  ? Acc
  : T extends [infer Head, ...infer Tail extends number[]]
  ?
      | TwoSumUnion<
          Tail,
          Add<Index, 1>, // increment index by 1
          Add<Acc, Head> // increment Acc by Head
        >
      | TwoSumUnion<Tail, Index, Acc>
  : never

type TwoSum<T extends number[], U extends number> = U extends TwoSumUnion<T>
  ? true
  : false
