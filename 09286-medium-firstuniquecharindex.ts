// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
  Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
  Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<'aaa'>, -1>>
]

// ============= Your Code Here =============
type FirstUniqueCharIndex<
  T extends string,
  U extends string = T,
  Count extends '🐔'[] = []
> = T extends ''
  ? -1
  : U extends `${infer Head}${infer Tail}`
  ? T extends `${string}${Head}${string}${Head}${string}`
    ? FirstUniqueCharIndex<T, Tail, [...Count, '🐔']>
    : Count['length']
  : -1
