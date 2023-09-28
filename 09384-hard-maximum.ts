// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Maximum<[]>, never>>,
  Expect<Equal<Maximum<[0, 2, 1]>, 2>>,
  Expect<Equal<Maximum<[1, 20, 200, 150]>, 200>>
]

// ============= Your Code Here =============
type GreaterThan<
  T extends number,
  U extends number,
  Count extends '🐔'[] = []
> = Equal<T, U> extends true
  ? false
  : Count['length'] extends T
  ? false
  : Count['length'] extends U
  ? true
  : GreaterThan<T, U, [...Count, '🐔']>

type Maximum<T extends number[]> = T extends [
  infer Head extends number,
  ...infer Tail extends number[]
]
  ? GreaterThan<Head, Tail[0]> extends true
    ? Head
    : Maximum<Tail>
  : never

//  ============= Minimum =============
type cases2 = [
  Expect<Equal<Minimum<[]>, never>>,
  Expect<Equal<Minimum<[0, 2, 1]>, 0>>,
  Expect<Equal<Minimum<[1, 20, 200, 150]>, 1>>
]

// ============= Your Code Here =============
type LessThan<
  T extends number,
  U extends number,
  Count extends '🐔'[] = []
> = Equal<T, U> extends true
  ? false
  : Count['length'] extends T
  ? true
  : Count['length'] extends U
  ? false
  : LessThan<T, U, [...Count, '🐔']>

type Minimum<T extends number[]> = T extends [
  infer Head extends number,
  ...infer Tail extends number[]
]
  ? LessThan<Head, Tail[0]> extends true
    ? Head
    : Minimum<Tail>
  : never
