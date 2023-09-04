// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>
]

// ============= Your Code Here =============
// type IsNever<T> = T extends never ? true : false

// Distributive Conditional Types
// Typically, distributivity is the desired behavior.
// To avoid that behavior, you can surround each side of the extends keyword with square brackets.
type IsNever<T> = [T] extends [never] ? true : false
