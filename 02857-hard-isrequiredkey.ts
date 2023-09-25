// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'a'>, true>>,
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'b'>, false>>,
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'b' | 'a'>, false>>
]

// ============= Your Code Here =============
type RequiredKeys<T> = keyof {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P]
}

type IsRequiredKey<T, K extends keyof T> = Equal<
  RequiredKeys<T>,
  K
> extends true
  ? true
  : false
