// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsAny<any>, true>>,

  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>,
  Expect<Equal<IsAny<Record<PropertyKey, string>>, false>>
]

// ============= Your Code Here =============
// type IsAny<T> =  Equal<T, any> extends true ? true : false

type IsAny<T> = 0 extends 1 & T ? true : false
