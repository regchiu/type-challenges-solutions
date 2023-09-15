// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import { ExpectFalse, NotEqual } from './test-utils'

type cases = [
  Expect<Equal<CheckRepeatedChars<'abc'>, false>>,
  Expect<Equal<CheckRepeatedChars<'abb'>, true>>,
  Expect<Equal<CheckRepeatedChars<'cbc'>, true>>,
  Expect<Equal<CheckRepeatedChars<''>, false>>
]

// ============= Your Code Here =============
type StringToUnion<
  T extends string,
  U = never
> = T extends `${infer Head}${infer Tail}` ? StringToUnion<Tail, U | Head> : U

type CheckRepeatedChars<T extends string> =
  T extends `${infer Head}${infer Tail}`
    ? Head extends StringToUnion<Tail>
      ? true
      : CheckRepeatedChars<Tail>
    : false

type Test = CheckRepeatedChars<'abc'>
