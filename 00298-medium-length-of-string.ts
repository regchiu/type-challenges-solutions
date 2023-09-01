// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>
]

// ============= Your Code Here =============
type StringToTuple<T extends string> = T extends `${string}${infer Tail}`
  ? [T, ...StringToTuple<Tail>]
  : []

type LengthOfString<S extends string> = StringToTuple<S>['length']
